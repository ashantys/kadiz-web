'use client';
import Link from 'next/link';
import styles from './page.module.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export default function Home() {
  return (
      <Link href={'/pito'}>Este es el link al pito</Link>
  )
}
