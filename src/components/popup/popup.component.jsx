import './popup.styles.scss';
import { useState, useEffect } from 'react';


let interval = undefined;

const Popup = ({ item, close }) => {
    const { urlImage, author, title, name_apk, paragraph, Link_Download } = item;
    const [running, setRunning] = useState(false);
    const [progress, setProgress] = useState(0);

    const [run, setRun] = useState(false);



    // eslint-disable-next-line no-unused-vars
    function CPABuildComplete(){
        window.open(Link_Download, "_blank");
        console.log("thank you!");
    }
    
    const locker = () => {
        // eslint-disable-next-line no-undef
        CPABuildLock();
    }

    useEffect(()=> {
        if(running) {
            interval = setInterval(()=>{
                setProgress((prev) => prev + 1);
            }, 100);
        } else {
            clearInterval(interval);
        }
    },[running]);

    useEffect(()=>{
        if (progress === 100){
            setRunning(false);
            clearInterval(interval);
        }
    }, [progress]);

    
    useEffect(() => {
        if (progress === 100) {
            setTimeout(()=>{
                locker();
            }, 1000);
        }
    }, [progress]); 




    return(
        <div className='popup'>
            <div className='popup__content'>
                <div className='popup__content__close'>
                    <span className='popup__content__close-x' onClick={close}>X</span>
                </div>

                <div className='popup__content__details'>
                    <div className='popup__content__details__inner'>
                        <div className='popup__content__details__download'>
                            <div className='popup__content__details__download__left'>
                                <img src={urlImage} alt='photo' className='popup__content__details__download__left--img'  />
                            </div>

                            <div className='popup__content__details__download__middle'>
                                <span className='popup__content__details__download__middle--author'>{author}</span>
                                <h5 className='popup__content__details__download__middle--title'>{title}</h5>
                                <p className='popup__content__details__download__middle--desc'>{paragraph}</p>
                            </div>
                            <div className='popup__content__details__download__right'>
                                <div className='item__container--button' onClick={() => {
                                                                                setRun (true);
                                                                                setRunning(true);
                                                                                setProgress(0);
                                                                        }}>
                                    <div className='item__container--button__container'>
                                        install
                                    </div>
                                </div>
                            </div>
                        </div>

                        {run && 
                            <div className='popup__content__details__progressBar'>
                                <div className='popup__content__details__progressBar__downloading'>
                                    Downloading <span className='popup__content__details__progressBar__downloading__app'>{name_apk}</span>
                                </div>

                                <div className='popup__content__details__progressBar__progress'>
                                    <div className='popup__content__details__progressBar__progressing' style={{width: `${progress}%`}}>

                                    </div>
                                </div>
                            </div>
                        }


                        <div className='popup__content__details__ratings'>
                            <h4>USER RATINGS</h4>
                        </div>

                        <div className='popup__content__details__reviews'>
                            <h4>USER REVIEWS</h4>
                        </div>

                        <div className='popup__content__details__addReview'>
                            <h4>LEAVE A REVIEW</h4>
                            <textarea rows='3' placeholder='Your Review...'></textarea>
                            <div>Add Review</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Popup;