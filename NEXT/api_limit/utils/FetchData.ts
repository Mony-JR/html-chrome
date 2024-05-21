import { API_URL } from "./const"

export interface IUsers{
    avatar?: string
    id?:number,
    name?:string,
    createAt?:string
  }

  export async function Fetching():Promise<IUsers>{
    const data = await fetch (`${API_URL}/kk`)

    if(!data.ok){
      throw new Error ("Not successful")
    }
    return data.json()
  }

  export async function Dynamic_Route(id: string):Promise<IUsers>{
    const data=await fetch (`${API_URL}/kk/${id}`)

    if(!data.ok){
      throw new Error ("Not successful")
    }
    return data.json()
  }
  
  export async function fetchData(page: number = 1, limit: number = 5) : Promise<IUsers[]>{
    const data = await fetch (`${API_URL}/kk?page=${page}&limit=${limit}`)

    if(!data.ok){
      throw new Error ("Not successful")
    }
    return data.json()
  }

