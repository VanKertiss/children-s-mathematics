import HS from './HelloPage.module.css';
import helloImg from '../../img/hello.png';

const HelloPage = () => {
    return (
        <div className={HS.container}>
            <div className={HS.helloContent}>
                <img className={HS.helloImg} src={helloImg} alt="" />
                <h2 className={HS.helloText}>
                Узнать новое, подготовиться к уроку, экзамену или вспомнить забытое
                Изучайте школьные предметы на практике. 100% бесплатно.
                </h2>
            </div>
        </div>
    )
};

export default HelloPage;