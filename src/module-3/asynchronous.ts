//json placeholder api https://jsonplaceholder.typicode.com/todos/1

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getTodo = async (): Promise<ITodo> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);

  return await res.json();
};

const getTodoData = async () => {
  const result = await getTodo();
  console.log(result);
};

const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "data is fetched";
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetch data");
    }
  });
};

const makePromiseBoolean = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    const data: boolean = true;
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetch data");
    }
  });
};

type DataType = {
  data: string;
};

const makePromiseObject = (): Promise<DataType> => {
  return new Promise<DataType>((resolve, reject) => {
    const data: DataType = { data: "hello object" };
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetch data");
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

const getPromiseDataObject = async (): Promise<DataType> => {
  const data = await makePromiseObject();
  return data;
};
