 interface IState    {transactions: Array<ITrans>}
 interface ITrans    {id: number,text: string, amount: number}
 interface IAction   {type: string,payload: any}
 interface IAmts     {amount: Array<number>}