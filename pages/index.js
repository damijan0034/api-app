import BookList from "@/components/BookList"
import Link from "next/link"
import { useState } from "react"



export default function Home() {
  
  return (
    <div>
        <BookList />
        <div>
          <Link href='add'>Add New Book</Link>
        </div>
    </div>
   
  )
}
