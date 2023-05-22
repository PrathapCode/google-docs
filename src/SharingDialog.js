// import { render } from '@testing-library/react';
import React from 'react';

import { EmailShareButton, EmailIcon, FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon, TwitterShareButton, TwitterIcon, TelegramShareButton, TelegramIcon, LinkedinShareButton, LinkedinIcon, PinterestShareButton, PinterestIcon, TumblrShareButton, TumblrIcon, LineShareButton, LineIcon , LivejournalShareButton , LivejournalIcon} from 'react-share';

export default function SharingDialog() {

  const shareUrl = 'gdocscloneprathap.ultihost.net';

  return (

    <div  className='body-show'>

      <div className='blur'>

        

      </div>

      <div className="show">

          <div className='header'>

            <h1>Share Document</h1>

            <div className='header-img'>
              <img src='/question.png' style={{ width: "20px", height: "20px" }} ></img>
              <img src='/setting.png' style={{ width: "20px", height: "20px" }} ></img>
            </div>

          </div>

          <div className='share'>

            <div>
              <EmailShareButton
                url={shareUrl}>

                <EmailIcon size={40} round={true}></EmailIcon>
              </EmailShareButton>

              <FacebookShareButton
                url={shareUrl}>

                <FacebookIcon size={40} round={true}></FacebookIcon>
              </FacebookShareButton>

              <WhatsappShareButton
                url={shareUrl}>

                <WhatsappIcon size={40} round={true}></WhatsappIcon>
              </WhatsappShareButton>

              <PinterestShareButton
                url={shareUrl}>

                <PinterestIcon size={40} round={true}></PinterestIcon>
              </PinterestShareButton>

              <TumblrShareButton
                url={shareUrl}>

                <TumblrIcon size={40} round={true}></TumblrIcon>
              </TumblrShareButton>

            </div>

            <div>

              <TwitterShareButton
                url={shareUrl}>

                <TwitterIcon size={40} round={true}></TwitterIcon>
              </TwitterShareButton>

              <TelegramShareButton
                url={shareUrl}>

                <TelegramIcon size={40} round={true}></TelegramIcon>
              </TelegramShareButton>

              <LinkedinShareButton
                url={shareUrl}>

                <LinkedinIcon size={40} round={true}></LinkedinIcon>
              </LinkedinShareButton>

              <LineShareButton
                url={shareUrl}>

                <LineIcon size={40} round={true}></LineIcon>
              </LineShareButton>

              <LivejournalShareButton
                url={shareUrl}>

                <LivejournalIcon size={40} round={true}></LivejournalIcon>
              </LivejournalShareButton>

            </div>


          </div>

        </div>

    </div>

  );

}
