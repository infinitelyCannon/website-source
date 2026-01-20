import Header from "./elements/header";
import Button from "./elements/button";
import Image from "next/image";
import {Icon} from '@iconify-icon/react';
import IntroImage from '@/public/temp/pic10.jpg';

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
                    <Button size="large">Learn More</Button>
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
                <div className="">
                    <h3>Sapien veroeros</h3>
                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                </div>
            </article>
        </div>
      </section>
    </>
  );
}
