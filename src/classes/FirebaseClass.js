import {
  ref,
  deleteObject,
  getDownloadURL,
  uploadBytes,
  listAll,
} from 'firebase/storage';
import {
  serverTimestamp,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  arrayRemove,
} from 'firebase/firestore';
import { db, storage, postsRef } from '../firebase';
import { v4 as uuidv4 } from 'uuid';
import AlertClass from './AlertClass';

export default class FirebaseClass {
  email;
  password;
  posts;
  progress;
  collectionRef;
  dir;
  subdir;

  setEmail(givenEmail) {
    this.email = givenEmail;
  }

  setPassword(givenPassword) {
    this.password = givenPassword;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  setPosts(givenPosts) {
    this.posts = givenPosts;
  }

  getPosts() {
    return this.posts;
  }

  setProgress(givenProgress) {
    this.progress = givenProgress;
  }

  getProgress() {
    return this.progress;
  }

  setCollectionRef(givenCollectionRef) {
    this.collectionRef = givenCollectionRef;
  }

  getCollectionRef() {
    return this.collectionRef;
  }

  setDir(givenDir) {
    this.dir = givenDir;
  }

  getDir() {
    return this.dir;
  }

  setSubdir(givenSubdir) {
    this.subdir = givenSubdir;
  }

  getSubdir() {
    return this.subdir;
  }

  removeExtension(file) {
    const finalName = file.split('.').slice(0, -1).join('.');
    return finalName;
  }

  fetchPosts = async () => {
    onSnapshot(postsRef, (snapshot) => {
      const results = snapshot.docs.map((doc) => {
        return { ...doc.data(), key: doc.id };
      });
      return results;
    });
  };

  async uploadImages(givenImages, postId) {
    const extension = '.png';
    const downloadURLs = [];
    for (let i = 0; i < givenImages.length; i++) {
      const imageName = this.removeExtension(givenImages[i].name) + extension;
      const imgRef = ref(storage, `postImages/${postId}/${imageName}`);
      const uploadTask = await uploadBytes(imgRef, givenImages[i]);
      const downloadURL = await getDownloadURL(uploadTask.ref);
      downloadURLs.push(downloadURL);
    }
    return downloadURLs;
  }

  async makePost(projectName, pageUrl, codeurl, description, image) {
    const postId = uuidv4();
    const postRef = doc(db, 'posts', postId);
    await setDoc(postRef, {
      id: postId,
      images: [],
      project_name: projectName,
      page_url: pageUrl,
      code_url: codeurl,
      description: description,
      createdAt: serverTimestamp(),
    });
    const downloadURLs = await this.uploadImages(image, postId);
    await updateDoc(postRef, { images: downloadURLs });
  }

  async updatePost(postId, newTitle, newDesc) {
    const ac = new AlertClass();
    const postRef = doc(db, 'posts', postId);

    updateDoc(postRef, { title: newTitle, desc: newDesc })
      .then(() => {
        ac.successAlert('Post updated successfully');
      })
      .catch((error) => {
        ac.errorAlert('Error updating post', error);
      });
  }

  async addNewPostImages(postId, currentImages, newImages) {
    const ac = new AlertClass();
    const postRef = doc(db, 'posts', postId);
    let allImages = [];
    this.uploadImages(newImages, postId).then((downloadURLs) => {
      allImages = [...currentImages, ...downloadURLs];
      updateDoc(postRef, { images: allImages })
        .then(() => {
          ac.successAlert('Images updated successfully');
        })
        .catch((error) => {
          ac.errorAlert('Error updating images', error);
        });
    });
  }

  async getPostImageNames(postId) {
    const storageRef = ref(storage, `postImages/${postId}/`);
    const imageNames = [];
    await listAll(storageRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
          imageNames.push(itemRef.name);
        });
      })
      .catch((error) => {
        console.log('error', error);
      });
    return imageNames;
  }

  async getImageNameFromUrl(imgLinkInPostObj) {
    const httpsReference = ref(storage, `${imgLinkInPostObj}`);
    let filename = httpsReference.name;
    console.log('filename: ', filename);
    return filename;
  }

  async removeImageFromPost(postId, imgLinkInPostObj) {
    const ac = new AlertClass();
    const postRef = doc(db, 'posts', postId);
    updateDoc(postRef, { images: arrayRemove(imgLinkInPostObj) })
      .then(() => {
        ac.successAlert('Images removed successfully');
      })
      .catch((error) => {
        ac.errorAlert('Error removing images', error);
      });
  }

  async deletePostImage(path, nameOfImgToDel, postId, imgLinkInPostObj) {
    const ac = new AlertClass();
    const postImgsRef = ref(storage, `postImages/${path}/${nameOfImgToDel}`);
    deleteObject(postImgsRef)
      .then(() => {
        this.removeImageFromPost(postId, imgLinkInPostObj);
      })
      .catch((error) => {
        ac.errorAlert('Error deleting post images', error);
      });
  }

  async deletePost(collection_ref, postId) {
    const ac = new AlertClass();
    const postRef = doc(db, collection_ref, postId);
    const storageRef = ref(storage, `postImages/${postId}/`);
    const imageNames = [];
    await listAll(storageRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
          imageNames.push(itemRef.name);
        });
      })
      .catch((error) => {
        console.log('error', error);
      });
    imageNames.forEach((img) => {
      this.deletePostImage(postId, img);
    });
    await deleteDoc(postRef)
      .then(() => ac.successAlert('Post deleted successfully'))
      .catch((error) => {
        ac.errorAlert('Error deleting post', error);
      });
  }
}
