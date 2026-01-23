import Icon from '@/app/elements/icon';
import Logo from '@/app/elements/logo';
import Image from 'next/image';

export default function Header()
{
    return (
        <header style={{display: 'flex'}}>
            <Logo width="75px" height="75px" style={{color: 'light-dark(#2f4274, #2eabff)'}} />
            <div id='header'>
                <a className="logo">
                    <strong>Dakarai Simmons</strong> | Portfolio Site
                </a>
                <ul className="icons">
                    <li>
                        <a className='icon brands' href='https://github.com/infinitelycannon' target='_blank' title='GitHub'>
                            <Icon icon="mdi:github" height="2em"></Icon>
                        </a>
                    </li>
                    <li>
                        <a className='icon brands' href='https://www.linkedin.com/in/dakarai-simmons-a23787132/' target='_blank' title='LinkedIn'>
                            <Icon icon="mdi:linkedin" height="2em"></Icon>
                        </a>
                    </li>
                    <li>
                        <a className='icon brands' href='mailto:dakar0416@gmail.com' target='_blank' title='Email'>
                            <Icon icon="mdi:email" height="2em"></Icon>
                        </a>
                    </li>
                    <li>
                        <a className='icon brands' href='https://github.com/infinitelycannon' target='_blank' title='Resume'>
                            <Icon icon="fa-solid:file-pdf" height="2em"></Icon>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}