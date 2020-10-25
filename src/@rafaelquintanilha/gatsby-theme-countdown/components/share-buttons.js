/** @jsx jsx */
import { jsx, css, Flex } from 'theme-ui';
import { 
  TwitterShareButton, TwitterIcon,
  WhatsappShareButton, WhatsappIcon,
  FacebookShareButton, FacebookIcon,
} from 'react-share';
import config from '../configs/share-buttons';

const URL = typeof window !== "undefined" ? window.location.href : '';

const ShareButtons = ({ 
  title, 
  hideFacebookShareButton, 
  hideTwitterShareButton, 
  hideWhatsappShareButton 
}) => (
  <Flex css={css({
    flex: 1,
    my: 3,
    "& > *": {
      height: 48,
      cursor: "pointer",
    },
    "& > *:not(:last-child)": {
      mr: 3
    },
    "& svg circle:first-of-type": {
      fill: "transparent"
    },
    "& svg path": {
      variant: 'svg',
    }
  })}>
    {!hideWhatsappShareButton && <WhatsappShareButton 
      url={URL} 
      title={title} 
      {...config.whatsapp}>
      <WhatsappIcon size={48} round />
    </WhatsappShareButton>}
    {!hideTwitterShareButton && <TwitterShareButton 
      url={URL} 
      title={title} 
      {...config.twitter}>
      <TwitterIcon size={48} round />
    </TwitterShareButton>}
    {!hideFacebookShareButton && <FacebookShareButton 
      url={URL}
      {...config.facebook}>
      <FacebookIcon size={48} round />
    </FacebookShareButton>}
  </Flex>
);

export default ShareButtons;