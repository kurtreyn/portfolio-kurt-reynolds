import { createSlice } from '@reduxjs/toolkit';

export const controlsSlice = createSlice({
  name: 'controls',
  initialState: {
    loading: false,
    show_menu: false,
    posts: null,
    refreshPosts: false,
    show_modal: false,
    modal_mode: '',
    page_mode: '',
    admin_activity: '',
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setShowMenu: (state, action) => {
      state.show_menu = action.payload;
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setRefreshPosts: (state, action) => {
      state.refreshPosts = action.payload;
    },
    setShowModal: (state, action) => {
      state.show_modal = action.payload;
    },
    setModalMode: (state, action) => {
      state.modal_mode = action.payload;
    },
    setPageMode: (state, action) => {
      state.page_mode = action.payload;
    },
    setAdminActivity: (state, action) => {
      state.admin_activity = action.payload;
    },
  },
});

export const {
  setLoading,
  setShowMenu,
  setPosts,
  setRefreshPosts,
  setShowModal,
  setModalMode,
  setPageMode,
  setAdminActivity,
} = controlsSlice.actions;

export default controlsSlice.reducer;
