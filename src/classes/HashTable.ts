function hashStringToInt(s: string, tableSize: number) {
  let hash = 17;

  for (let i = 0; i < s.length; i++) {
    hash = (13 * hash * s.charCodeAt(i)) % tableSize;
  }

  return hash;
}

class HashTable {
  table = new Array(3);
  numItems = 0;

  resize = () => {
    const newTable = new Array(this.table.length * 2);
    this.table.forEach(item => {
      if (item) {
        item.forEach(([key, value]: string) => {
          const idx = hashStringToInt(key, newTable.length);
          if (newTable[idx]) {
            newTable[idx].push([key, value])
          } else {
            newTable[idx] = [[key, value]];
          }
        });
      }
    });
    this.table = newTable
  }

  setItem = (key: string, value: number | string) => {
    this.numItems++;
    const loadFactor = this.numItems / this.table.length;
    if (loadFactor > .8) {
      //resize
      this.resize()
    }

    const idx = hashStringToInt(key, this.table.length);
    if (this.table[idx]) {
      this.table[idx].push([key, value])
    } else {
      this.table[idx] = [[key, value]];
    }
  }

  getItem = (key: string) => {
    const idx = hashStringToInt(key, this.table.length);
    if (!this.table[idx]) {
      return null;
    }

    //O(n)
    return this.table[idx].find((x: string) => x[0] === key)[1];
  }

}

const myTable = new HashTable()
myTable.setItem("firstName", "bob");
myTable.setItem("lastName", "tim");
myTable.setItem("age", 5);
myTable.setItem("dob", "1/2/3");
console.log(myTable.table[0]);
console.log(myTable.getItem("firstName"));
console.log(myTable.getItem("lastName"));
console.log(myTable.getItem("age"));
console.log(myTable.getItem("dob"));