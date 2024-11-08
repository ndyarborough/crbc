import React from 'react';
import SectionHeader from '../../components/general/SectionHeader';
import './GivingOptions.scss';

function GivingOptions() {
    const easyTitheUrl = 'https://forms.ministryforms.net/embed.aspx?formId=58692ee9-f9c2-45a0-bcf6-2f92d5f04c77&custom-templates='; // Replace with your EasyTithe embed URL

    return (
        <div className='giving-options'>
            <SectionHeader text='GIVING OPTIONS' />
            <div className="easytithe-form-container">
                <iframe
                    src={easyTitheUrl}
                    width="100%"
                    height="600" // Adjust height as needed
                    frameBorder="0"
                    title="EasyTithe Donation"
                    allowTransparency="true"
                ></iframe>
            </div>
        </div>
    );
}

export default GivingOptions;
