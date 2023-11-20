interface Food {
    id : string;
    name: string;
    description?: string;
    caloriesPerGram : number;
    proteinPerGram : number;
  //   createUser: IUser;
    createdAt: Date;
  }
export default Food;