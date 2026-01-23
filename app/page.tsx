import Header from "./elements/header";
import Button from "./elements/button";
import Image from "next/image";
import {Icon} from '@iconify-icon/react';

import IntroImage from '@/public/temp/pic10.jpg';
import Img1 from '@/public/temp/pic01.jpg';
import Img2 from '@/public/temp/pic02.jpg';
import Img3 from '@/public/temp/pic03.jpg';
import Img4 from '@/public/temp/pic04.jpg';
import Img5 from '@/public/temp/pic05.jpg';
import Img6 from '@/public/temp/pic06.jpg';

export default function Home() {
  return (
    <>
      <Header />
      <section id="banner">
        <div className="content">
            <header>
                <h1>
                    Hi, I'm Editorial
                    <br/>
                    by HTML5 UP
                </h1>
                <p>A Free and fully responsive site template</p>
            </header>
            <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
            <ul className="actions">
                <li>
                    <Button size="large" iconID="mdi:question-mark">Learn More</Button>
                </li>
                <li>
                    <Button primary={true} iconID="mdi:account-school">Test</Button>
                </li>
            </ul>
        </div>
        <span className="image object">
            <Image src={IntroImage} alt="Intro Image" />
        </span>
      </section>
      <section>
        <header className="major">
            <h2>Erat lacinia</h2>
        </header>
        <div className="features">
            <article>
                <span className="icon">
                    <Icon icon="fa-regular:gem" width="2.75rem" />
                </span>
                <div className="content">
                    <h3>Portitor ullamcorper</h3>
                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                </div>
            </article>
            <article>
                <span className="icon">
                    <Icon icon="fa:send" width="2.75rem" />
                </span>
                <div className="content">
                    <h3>Sapien veroeros</h3>
                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                </div>
            </article>
            <article>
                <span className="icon">
                    <Icon icon="material-symbols:rocket-launch-rounded" width="2.75rem" />
                </span>
                <div className="content">
                    <h3>Quam lorem ipsum</h3>
                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                </div>
            </article>
            <article>
                <span className="icon">
                    <Icon icon="mdi:signal" width="2.75rem" />
                </span>
                <div className="content">
                    <h3>Sed magna finibus</h3>
                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                </div>
            </article>
        </div>
      </section>
      <section>
        <header className="major">
            <h2>Ipsum sed dolor</h2>
        </header>
        <div className="posts">
            <article>
                <a className="image" href="#">
                    <Image src={Img1} alt="" />
                </a>
                <h3>Interdum aenean</h3>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                <ul className="actions">
                    <li>
                        <Button href="#">More</Button>
                    </li>
                </ul>
            </article>
            <article>
                <a className="image" href="#">
                    <Image src={Img2} alt="" />
                </a>
                <h3>Interdum aenean</h3>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                <ul className="actions">
                    <li>
                        <Button href="#">More</Button>
                    </li>
                </ul>
            </article>
            <article>
                <a className="image" href="#">
                    <Image src={Img3} alt="" />
                </a>
                <h3>Interdum aenean</h3>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                <ul className="actions">
                    <li>
                        <Button href="#">More</Button>
                    </li>
                </ul>
            </article>
            <article>
                <a className="image" href="#">
                    <Image src={Img4} alt="" />
                </a>
                <h3>Interdum aenean</h3>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                <ul className="actions">
                    <li>
                        <Button href="#">More</Button>
                    </li>
                </ul>
            </article>
            <article>
                <a className="image" href="#">
                    <Image src={Img5} alt="" />
                </a>
                <h3>Interdum aenean</h3>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                <ul className="actions">
                    <li>
                        <Button href="#">More</Button>
                    </li>
                </ul>
            </article>
            <article>
                <a className="image" href="#">
                    <Image src={Img6} alt="" />
                </a>
                <h3>Interdum aenean</h3>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                <ul className="actions">
                    <li>
                        <Button href="#">More</Button>
                    </li>
                </ul>
            </article>
        </div>
      </section>
    </>
  );
}
