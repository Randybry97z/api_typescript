function hashStringToInt(s: string) {
  return 5;
}

class HashTable {

  table = new Array(100);

  setItem = (key: string, value: number | string) => {
    const idx = hashStringToInt(key);
    this.table[idx] = value;
  }

  getItem = (key: string) => {
    const idx = hashStringToInt(key)
    return this.table[idx]
  }

}

const myTable = new HashTable()
myTable.setItem('firstName', 'bob')
myTable.getItem('firstName');
console.log(myTable.getItem('firstName'));