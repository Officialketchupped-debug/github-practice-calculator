import Head from 'next/head';
import Header from './components/Header';
import BillInput from './components/Bill-Input';

export default function Home() {
  return (
    <>
      <Header/>
      <BillInput/>
    </>
  );
}
