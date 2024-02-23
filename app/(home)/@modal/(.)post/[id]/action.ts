'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const postData = async () => {
  revalidatePath('/')
  redirect('/post/1/done')
}