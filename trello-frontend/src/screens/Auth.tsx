import AuthBanner from '../components/AuthBanner'
import AuthForm from '../components/AuthForm'

export const Auth = () => {
    return (
        <div style={{display: 'flex'}}>
            <div style={{flex: 4}}>
                <AuthBanner />
            </div>
            <div style={{flex: 6}}>
                <AuthForm />
            </div>
            
        </div>
    )
}