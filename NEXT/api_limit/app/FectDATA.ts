export interface TypeofFetching{
    avatar: string
    id:number,
    name:string,
    createAt:string
  }
  export async function Fetching():Promise<TypeofFetching>{
    const fectDATA=await fetch ('https://6645712ab8925626f891e228.mockapi.io/kk')
    if(!fectDATA.ok){
      throw new Error ("Not successful")
    }
    return fectDATA.json()
  }

  export async function Dynamic_Route(id:any):Promise<TypeofFetching>{
    const fectDATA=await fetch (`https://6645712ab8925626f891e228.mockapi.io/kk/${id}`)
    if(!fectDATA.ok){
      throw new Error ("Not successful")
    }
    return fectDATA.json()
  }
  export async function Show_more(id:any,more:any):Promise<TypeofFetching>{
    const fectDATA=await fetch (`https://6645712ab8925626f891e228.mockapi.io/kk/?page=${id}&limit=${more}`)
    if(!fectDATA.ok){
      throw new Error ("Not successful")
    }
    return fectDATA.json()
  }

