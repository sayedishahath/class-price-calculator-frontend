import LoginForm from './LoginForm'

export default function Home() {
    return (
        <div className="row login">
            <div className="flex-row align-items-center col md-10">
                <img src='./edize-logo.jpg' className='' alt='logo'></img> 
                
                <div>
                    <h1 className='text-3xl font-bold' style={{ fontSize: '1.5rem' }}>Edize class price calculator</h1>
                </div>
            </div>
            <div className="col md-2">
                <LoginForm />
            </div>
        </div>
    )
}