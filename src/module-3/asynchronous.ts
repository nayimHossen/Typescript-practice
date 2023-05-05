//json placeholder api

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getTodo = async (): Promise<ITodo> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1
    `);
  return await response.json();
};

const getTodoData = async (): Promise<void> => {
  const result = await getTodo();
  console.log(result);
};

getTodoData();

const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data = "Data is fetched";
    if (data) {
      resolve(data);
    } else {
      reject("failed to fetch data");
    }
  });
};

const makePromiseBoolean = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    const data: boolean = true;
    if (data) {
      resolve(data);
    } else {
      reject("failed to fetch data");
    }
  });
};

type DataType = {
  data: string;
};

const makePromiseObject = (): Promise<object> => {
  return new Promise<object>((resolve, reject) => {
    const data: object = { data: "data" };
    if (data) {
      resolve(data);
    } else {
      reject("failed to fetch data");
    }
  });
};

const getPromiseData = async (): Promise<string> => {
  const data = await makePromise();
  return data;
};

const getPromiseDataBoolean = async (): Promise<boolean> => {
  const data = await makePromiseBoolean();
  return data;
};

const getPromiseDataObject = async (): Promise<object> => {
  const data = await makePromiseObject();
  return data;
};
