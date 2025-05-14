import SectionHeader from '../../components/general/SectionHeader';
import GospelSection from '../../components/Sections/GospelSection/GospelSection';
import './TheGospel.scss';

function TheGospel() {
    return (
        <div className='the-gospel'>
            <SectionHeader text='THE GOSPEL' />
            <GospelSection
                title='Creation:'
                paragraph='In the beginning God created everything and it was perfect. There was no sickness, no disease, no sadness, and no sin. Everything lived in harmony with God.'
                verses='Genesis 1:1; Psalm 90:2'
            />

            <GospelSection
                title='Fall:'
                paragraph='Then man rebelled against God and was deceived by Satan to disobey God’s command. Sin entered into the world, and into every human heart. Everything now is broken including our relationship with God. Now everyone is guilty before God deserving death.'
                verses='Genesis 3; Romans 3:10; Romans 3:23'
            />
            <GospelSection
                title='Redemption:'
                paragraph='Someone has to pay the price for sin in our hearts. Jesus who is God, came to die and pay the price for your sin. He lived the life you couldn’t, died the death that you deserved, and defeated sin and death in His ressurection. By faith alone in Jesus one can have their sins forgiven, and have eternal life with God. '
                verses='1 Peter 3:18; Galatians 1:4'
            />
            <GospelSection
                title='Restoration:'
                paragraph='One day everything will be restored back to God’s design, and those who trust Jesus by faith will enjoy eternity in the new heaven and earth.'
                verses='Revelation 21:1-4; Ephesians 2:8-9'
            />
        </div>
    );
}

export default TheGospel;