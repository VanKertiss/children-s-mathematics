import HS from './Authorized.module.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';

interface Inputs {
    name: string,
    password: string,
};

const Authorized = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return (
        <div className={HS.container}>
            <h1>Авторизация</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Ваше имя
                <input id='name' defaultValue="" placeholder='Ваше имя' {...register("name", { required: true })} />
                {errors.name && <span className={HS.error}>Поле не может быть пустым</span>}
                </label>
                <label htmlFor="name">Ваш пароль
                <input defaultValue="" placeholder='Придумайте пароль' {...register("password", { required: true })} />
                {errors.password && <span className={HS.error}>Поле не может быть пустым</span>}
                </label>
                <input className={HS.inputSubmit} type="submit" />
                <Link className={HS.linkToRegister} to={'/registration'}>Если у вас нет аккаунта зарегистрируйтесь здесь</Link>
            </form>
            
        </div>
    )
};

export default Authorized;