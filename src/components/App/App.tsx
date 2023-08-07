// @ts-nocheck
import React, { FunctionComponent, useEffect, useRef, useState } from 'react';

import Rabbit from '../../assets/rabbit.png';
import Blair from '../../assets/blair.png';
import Airplane from '../../assets/airplane.png';
import Sketch from '../../assets/sketch.png';
import Old from '../../assets/old.png';
import BlairChild from '../../assets/blair-child.jpg';
import BlairTeenager from '../../assets/blair-teenager.jpg';
import BlairAdultNoSmile from '../../assets/blair-adult-no-smile.jpg';
import Missing from '../../assets/missing.jpg';
import Smile from '../../assets/smile.jpg';
import BlairSmile from '../../assets/blair-smile.jpg';

import Bulb from '../../assets/bulb/bulb.png';
import BulbBlue from '../../assets/bulb/bulb_blue.png';
import BulbGreen from '../../assets/bulb/bulb_green.png';
import BulbOrange from '../../assets/bulb/bulb_orange.png';
import BulbPink from '../../assets/bulb/bulb_pink.png';
import Decoration from '../../assets/banner.png';
import BallonBorder from '../../assets/Balloon-Border.png';
import Cake from '../../assets/cake128.png';

import Audio from '../../hbd.mp3';

const MAX_VISIBILITY = 3;

const Card = ({ title, content, children }) => (
  <div className="card">
    <h2>{title}</h2>
    {children}
  </div>
);

const Carousel = ({ children }) => {
  const [active, setActive] = useState(0);
  const count = React.Children.count(children);

  useEffect(() => {
    const interval = setInterval(() => {
      if (active < count - 1) {
        setActive(active + 1);
      }
    }, [12000]);

    return () => {
      clearInterval(interval);
    };
  }, [active]);

  return (
    <div className="carousel">
      {active > 0 && (
        <button className="nav left" onClick={() => setActive((i) => i - 1)}>
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="left"
            width="1em"
            height="1em"
            fill="black"
            aria-hidden="true"
          >
            <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
          </svg>
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          className="card-container"
          style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointer-events': active === i ? 'auto' : 'none',
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            display: Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button className="nav right" onClick={() => setActive((i) => i + 1)}>
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="right"
            width="1em"
            height="1em"
            fill="black"
            aria-hidden="true"
          >
            <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
          </svg>
        </button>
      )}
    </div>
  );
};

const WelcomeText = () => {
  return (
    <div class="content">
      <div class="content__container">
        <ul class="content__container__list">
          <li class="content__container__list__item">Hello Blair</li>
          <li class="content__container__list__item">My Princess</li>
          <li class="content__container__list__item">My Wife</li>
          <li class="content__container__list__item">Let's Start!</li>
        </ul>
      </div>
    </div>
  );
};

const Pictures = ({ setMainState }) => {
  const [step, setStep] = useState(0);

  return (
    <div>
      {step === 0 && (
        <h1 className="picture-content">
          My Babe!{' '}
          <span style={{ opacity: 0 }}>
            {setTimeout(() => setStep(1), 3000)}
          </span>
        </h1>
      )}
      {step === 1 && (
        <div className="picture-content">
          <h1>
            You were a cute child{' '}
            <span style={{ opacity: 0 }}>
              {setTimeout(() => setStep(2), 5000)}
            </span>
          </h1>
          <img src={BlairChild} width={300} />
        </div>
      )}
      {step === 2 && (
        <div className="picture-content">
          <h1>Then teenager</h1>
          <img src={BlairTeenager} width={300} />
          <span style={{ opacity: 0 }}>
            {setTimeout(() => setStep(3), 5000)}
          </span>
        </div>
      )}
      {step === 3 && (
        <h1 className="picture-content">
          But{' '}
          <span style={{ opacity: 0 }}>
            {setTimeout(() => setStep(4), 3000)}
          </span>
        </h1>
      )}
      {step === 4 && (
        <h1 className="picture-content">
          Today is your day{' '}
          <span style={{ opacity: 0 }}>
            {setTimeout(() => setStep(5), 3000)}
          </span>
        </h1>
      )}
      {step === 5 && (
        <div className="picture-content">
          <h1>
            You just turned 30 <span style={{ opacity: 0 }}></span>
          </h1>
          <img src={BlairAdultNoSmile} width={300} />
          <span style={{ opacity: 0 }}>
            {setTimeout(() => setStep(6), 5000)}
          </span>
        </div>
      )}
      {step === 6 && (
        <div className="picture-content">
          <h1>
            Something is missing. <span style={{ opacity: 0 }}></span>
          </h1>
          <img src={Missing} width={300} />
          <span style={{ opacity: 0 }}>
            {setTimeout(() => setStep(7), 5000)}
          </span>
        </div>
      )}

      {step === 7 && (
        <div className="picture-content">
          <img src={BlairSmile} width={300} />
          <h1>
            Your smile babe! <span style={{ opacity: 0 }}></span>
          </h1>
          <span style={{ opacity: 0 }}>
            {setTimeout(() => setStep(8), 5000)}
          </span>
          <img src={Smile} width={300} />
        </div>
      )}
      {step === 8 && (
        <h1 className="picture-content">
          My Woman!{' '}
          <span style={{ opacity: 0 }}>
            {setTimeout(() => setStep(9), 3000)}
          </span>
        </h1>
      )}
      {step === 9 && (
        <h1 className="picture-content">
          Happy Birthday!{' '}
          <span style={{ opacity: 0 }}>
            {setTimeout(() => setMainState(3), 3000)}
          </span>
        </h1>
      )}
    </div>
  );
};

const LastStep = () => {
  const [bulb, setBulbs] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setBulbs(2);
    }, 500);

    setTimeout(() => {
      setBulbs(3);
    }, 1000);

    setTimeout(() => {
      setBulbs(4);
    }, 1500);
  }, []);

  return (
    <div className="last-step">
      <div className="bulbs">
        <div className="bulb">
          <img src={Bulb} />
          <img src={BulbBlue} />
        </div>
        <div className="bulb">
          <img src={Bulb} />
          {bulb > 1 && <img src={BulbOrange} />}
        </div>
        <div className="bulb">
          <img src={Bulb} />
          {bulb > 2 && <img src={BulbPink} />}
        </div>
        <div className="bulb">
          <img src={Bulb} />
          {bulb > 3 && <img src={BulbGreen} />}
        </div>
      </div>
      <div className="decoration">
        <img className="banner" src={Decoration} />
      </div>
      <div className="ballon-border">
        <img src={BallonBorder} />
      </div>

      <div className="cake">
        <img src={Cake} />
      </div>

      <div className="basddasasd">
        <div class="balloons text-center balloons-rotate-behaviour-one" id="b1">
          <h2 style={{ color: 'pink' }}>B</h2>
        </div>

        <div class="balloons text-center balloons-rotate-behaviour-one" id="b2">
          <h2 style={{ color: 'green' }}>L</h2>
        </div>

        <div class="balloons text-center balloons-rotate-behaviour-one" id="b3">
          <h2 style={{ color: 'green' }}>A</h2>
        </div>

        <div class="balloons text-center balloons-rotate-behaviour-one" id="b4">
          <h2 style={{ color: 'green' }}>I</h2>
        </div>

        <div class="balloons text-center balloons-rotate-behaviour-one" id="b5">
          <h2 style={{ color: 'green' }}>R</h2>
        </div>
      </div>
    </div>
  );
};

const App: FunctionComponent<{}> = () => {
  const [visibility, setVisibility] = useState(false);
  const [step, setStep] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const ref = useRef();
  const [isPending, setIsPending] = useState(true);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (visibility) {
      setTimeout(() => {
        setStep(1);
      }, 7000);
    }
  }, [visibility]);

  useEffect(() => {
    if (opacity === 0) {
      setTimeout(() => {
        setStep(2);
      }, 1000);
    }
  }, [opacity]);

  useEffect(() => {
    ref?.current?.play();
  }, [step]);

  return (
    <>
      {isPending ? (
        <>
          <input
            type="text"
            placeholder="password here"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <br />
          <button
            onClick={() => {
              if (value === 'I-Love-Blair') {
                setIsPending(false);
                setVisibility(true);
              } else {
                setIsPending(false);
              }
            }}
          >
            Let's Rock!
          </button>
        </>
      ) : (
        <>
          {visibility ? (
            <div className="app">
              <div style={{ visibility: 'hidden' }}>
                <audio ref={ref} class="song" controls loop>
                  <source src={Audio}></source>
                </audio>
              </div>
              {step === 0 && <WelcomeText />}
              {step === 1 && (
                <div className="exit-carousel" style={{ opacity: opacity }}>
                  <div className="enter-carousel">
                    <Carousel>
                      {[
                        <Card title={'Instruction'} content="">
                          <p className="card-content">
                            Hello my honey! in this section cards are changing
                            after 12 seconds.
                          </p>
                        </Card>,
                        <Card title={'Welcome!'}>
                          <p className="card-content">
                            First of all, I created these cards to show in some
                            details how much I love you and how much I care
                            about our future together. Know that this is only a
                            fraction of what I want to show you.
                          </p>
                        </Card>,
                        <Card title={'How is that possible!'}>
                          <p className="card-content">
                            Every day I wonder how it is that the facebook
                            dating app was able to give us the opportunity to
                            catch up. I believe as much as you do, baby, that it
                            was destiny. Whatever we would do in life, we would
                            meet on our way no matter how. 😍😍
                          </p>
                        </Card>,
                        <Card title={'First message!'}>
                          <br />
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                              marginBottom: '-20px',
                              marginTop: '-20px',
                            }}
                          >
                            <img width={150} height={150} src={Rabbit} />
                          </div>
                          <p className="card-content">
                            When you wrote on May 9, I was a bit negative
                            because I was afraid you would prove untrue. But the
                            next day you contacted me and sent me this picture
                            that bribed my heart! Thank you for not giving up
                            and trying to get in touch with me. 😊😊
                          </p>
                        </Card>,
                        <Card title={'10 May!'}>
                          <p className="card-content">
                            I had a wonderful time writing to you that day.
                            These were our first long messages. I felt there was
                            a connection between us. I am so grateful for your
                            messages. Know that that day I already started to
                            fall in love with you! 🥰🥰
                          </p>
                        </Card>,
                        <Card title={'Your first photo'}>
                          <br />
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                              marginTop: '-20px',
                            }}
                          >
                            <img width={150} height={200} src={Blair} />
                          </div>
                          <p className="card-content">
                            I thought it would be beautiful! But I didn't expect
                            it to be so beautiful. Know that to me you are the
                            most beautiful on earth. My eyes are focused on you.
                            😘😘
                          </p>
                        </Card>,
                        <Card title={'The journey of life'}>
                          <br />
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                              marginTop: '-20px',
                            }}
                          >
                            <img width={100} height={100} src={Airplane} />
                          </div>
                          <p className="card-content">
                            I am so looking forward to our trip of a lifetime.
                            Know that I want to see the whole world with you,
                            but most of all, I want to live the rest of my life
                            with you. Every day I imagine how we hold hands and
                            will be at the end of our lives. 😇😇
                          </p>
                        </Card>,
                        <Card title={'The first sketch'}>
                          <br />
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                              marginTop: '-20px',
                            }}
                          >
                            <img height={100} src={Sketch} />
                          </div>
                          <p className="card-content">
                            When I saw how great you draw, I was so excited and
                            still am. I admire your artistic talent. You draw
                            the best for me! Remember that we will be sketching
                            together. I will sketch men. 😉😉
                          </p>
                        </Card>,
                        <Card title={'Old age'}>
                          <br />
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                              marginTop: '-20px',
                            }}
                          >
                            <img src={Old} />
                          </div>
                          <p className="card-content">
                            Don't we look cute? This is what we'll look like
                            when we're old. 😁😁
                          </p>
                        </Card>,
                        <Card title={'Last Card'}>
                          <br />
                          <p className="card-content">
                            OK babe. Time to move on to the most important day!
                            Do not close website yet! If you are ready, click{' '}
                            <span
                              onClick={() => setOpacity(0)}
                              style={{ color: 'blue', cursor: 'pointer' }}
                            >
                              here
                            </span>
                          </p>
                        </Card>,
                      ]}
                    </Carousel>
                  </div>
                </div>
              )}
              {step === 2 && <Pictures setMainState={setStep} />}
              {step === 3 && <LastStep />}
            </div>
          ) : (
            <>
              <h1 style={{ color: 'white' }}>You are not Blair, Get out!</h1>
            </>
          )}
        </>
      )}
    </>
  );
};

export default App;
