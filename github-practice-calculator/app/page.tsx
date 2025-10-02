import Head from 'next/head';
import Header from './components/Header';
import BillInput from './components/Bill-Input';
import TipSelection from './components/Tip-Selection';
import PeopleInput from './components/People-Input';

export default function Home() {
  return (
    <>
      <Header/>
      <BillInput/>
      <TipSelection/>
      <PeopleInput/>
    </>
  );
}
