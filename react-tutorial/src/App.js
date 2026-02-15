import { useState } from 'react';
import './App.css';
import CourseListCard  from './components/CourseListCard';

function App() {

  const [courses] = useState([
    {
      id: 1,
      title: '입문자를 위한, HTML&CSS 웹 개발 입문',
      description: '웹 개발에 필요한 기본 지식을 배웁니다.',
      thumbnail: '/img/htmlcss.png',
      link: 'https://inf.run/JxyyT',
    },
    {
      id: 2,
      title: '입문자를 위한, ES6+ 최신 자바스크립트 입문',
      description: '쉽고! 알찬! 내용을 준비했습니다.',
      thumbnail: '/img/js.png',
      link: 'https://inf.run/Kpnd',
    },
    {
      id: 3,
      title: '포트폴리오 사이트 만들고 배포까지!',
      description: '포트폴리오 사이트를 만들고 배포해 보세요.<',
      thumbnail: '/img/portfolio.png',
      link: 'https://inf.run/YkAN',
    },
  ])



  return (
	<main>
    <CourseListCard title={'웹 개발 입문'} courses={courses} />
	</main>
  );
}

export default App;
