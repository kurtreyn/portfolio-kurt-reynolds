export default class GlobalClass {
  phone;
  length = 0;

  setPhone = (value) => {
    this.phone = value;
  };

  getPhone = () => {
    return this.phone;
  };

  setLength = (value) => {
    this.length = value;
  };

  getLength = () => {
    return this.length;
  };

  formatPhoneNum = (value) => {
    const formattedPhone =
      '(' + value.slice(0, 3) + ') ' + value.slice(3, 6) + '-' + value.slice(6);

    return formattedPhone;
  };

  sortData = (data) => {
    const dataForSorting = [...data];
    if (dataForSorting) {
      const sorted = dataForSorting.sort((a, b) => {
        return b.createdAt - a.createdAt;
      });
      return sorted;
    }
  };
}
