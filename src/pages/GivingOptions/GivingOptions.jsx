import { useEffect } from 'react';
import SectionHeader from '../../components/general/SectionHeader';
import './GivingOptions.scss';

function GivingOptions() {
    const easyTitheUrl = 'https://forms.ministryforms.net/embed.aspx?formId=58692ee9-f9c2-45a0-bcf6-2f92d5f04c77&custom-templates='; // Your EasyTithe embed URL
    const realmTriggerUrl = 'https://onrealm.org/CreedmoorRoadBa/give/now'; // The trigger URL from the email

    useEffect(() => {
        // console.log('GivingOptions: useEffect for Realm script setup.');

        const realmScript = document.createElement('script');
        realmScript.id = 'r-embed-script';
        document.body.appendChild(realmScript);

        const realmLoaderScript = document.createElement('script');
        realmLoaderScript.type = 'text/javascript';
        realmLoaderScript.id = 'r-embed-loader-script';
        realmLoaderScript.innerHTML = `document.getElementById('r-embed-script').src = 'https://onrealm.org/Assets/Embed/giving-embed.js?v=' + Date.now();`;
        document.body.appendChild(realmLoaderScript);

        return () => {
            // console.log('GivingOptions: Cleaning up Realm scripts.');
            const existingRealmScript = document.getElementById('r-embed-script');
            if (existingRealmScript && document.body.contains(existingRealmScript)) {
                document.body.removeChild(existingRealmScript);
            }
            const existingLoaderScript = document.getElementById('r-embed-loader-script');
            if (existingLoaderScript && document.body.contains(existingLoaderScript)) {
                document.body.removeChild(existingLoaderScript);
            }
        };
    }, []);

    return (
        <div className='giving-options'>
            <SectionHeader text='GIVING' />

            <div className="new-giving-platform-container">
                <h2>New Giving Platform (Realm)</h2>
                <p>
                    We are excited to introduce our new giving platform! Please click the button below to open the giving form.
                    We will be fully transitioning over the next couple of months.
                </p>
                <a
                    href={realmTriggerUrl}
                    className="realm-give-now-button"
                    target="_blank" // Opens in new tab. Remove if Realm script handles this to open a modal.
                    rel="noopener noreferrer"
                >
                    Give Now (New Platform)
                </a>
            </div>

            <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #ccc' }} />

            <div className="old-giving-platform-container">
                <h2>Current Giving Platform (EasyTithe)</h2>
                <p>You can continue to use our current system while we transition.</p>
                <div className="easytithe-form-container">
                    <iframe
                        src={easyTitheUrl}
                        width="100%"
                        height="600"
                        frameBorder="0"
                        title="EasyTithe Donation"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default GivingOptions;