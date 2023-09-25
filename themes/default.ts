interface MyTheme {
  button: {
    base: string;
  };
  input: {
    active: string;
  };
}

const myTheme: MyTheme = {
  button: {
    base: "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-500"
  },
  input: {
    active: "focus:border-blue-400"
  }
};

export default myTheme;
