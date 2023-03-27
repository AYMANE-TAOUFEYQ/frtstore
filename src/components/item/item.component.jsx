import './item.styles.scss';

const Item = ({ item, changeContent }) => {
    const { urlImage, title, author } = item;

    return(
        <div className='item'>
            <div className='item__container'>
                <div className='item__container--image'>
                    <img 
                        src={urlImage}
                        alt='photo'
                        className='item__container--image__container'
                    /> 
                </div>

                <div className='item__container--details'>
                    <h4 className='item__container--details__title'>{title}</h4>
                    <div className='item__container--details__author'>
                        BY <span>{author}</span>
                    </div>
                </div>

                <div className='item__container--button' onClick={() => changeContent(item)}>
                    <div className='item__container--button__container'>
                        install
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;