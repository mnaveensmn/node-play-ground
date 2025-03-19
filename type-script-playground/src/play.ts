type TestType = {
  name: string;
  age: number;
};

const testObj: TestType = {
  name: "Naveen",
  age: 20,
};

//console.log(testObj);

const newObj: Partial<TestType> = {
  name: "xyz",
};

const oldObj: TestType = { name: "Naveen", age: 26 };

const merged : TestType= {
 ...oldObj,
 ...newObj
}

console.log(merged);