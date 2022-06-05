import Reloder from '../../assets/img/Reload.svg';

const FullScreenLoader = () => {
    return (
        <div>
            <center>
                <div>
                    <img src={Reloder} alt="Loading....." />
                </div>
            </center>
        </div>
    );
};

export default FullScreenLoader;
