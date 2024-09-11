import { render } from '@test';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { HomePage } from './HomePage';
import { act } from 'react';

const productsMock = [
  {
    "id": 1,
    "title": "Sony WH-1000XM3 Bluetooth Wireless Over Ear Headphones with Mic (Silver)",
    "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
    "price": 773,
    "description": "Digital noise cancelling : Industry leading Active Noise Cancellation (ANC) lends a personalized, virtually soundproof experience at any situation\r\nHi-Res Audio : A built-in amplifier integrated in HD Noise Cancelling Processor QN1 realises the best-in-class signal-to-noise ratio and low distortion for portable devices.\r\nDriver Unit : Powerful 40-mm drivers with Liquid Crystal Polymer (LCP) diaphragms make the headphones perfect for handling heavy beats and can reproduce a full range of frequencies up to 40 kHz.\r\nVoice assistant : Alexa enabled (In-built) for voice access to music, information and more. Activate with a simple touch. Frequency response: 4 Hz-40,000 Hz",
    "brand": "sony",
    "model": "WH-1000XM3",
    "color": "silver",
    "category": "audio",
    "discount": 11
  },
  {
    "id": 2,
    "title": "Microsoft Xbox X/S Wireless Controller Robot White",
    "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg",
    "price": 57,
    "description": "Experience the modernized design of the Xbox wireless controller in robot white, featuring sculpted surfaces and refined Geometry for enhanced comfort and effortless control during gameplay\r\nStay on target with textured grip on the triggers, bumpers, and back case and with a new hybrid D-pad for accurate, yet familiar input\r\nMake the controller your own by customizing button Mapping with the Xbox accessories app",
    "brand": "microsoft",
    "model": "Xbox X/S",
    "color": "white",
    "category": "gaming",
    "popular": true,
    "discount": 4
  },
  {
    "id": 3,
    "title": "Logitech G733 Lightspeed Wireless Gaming Headset with Suspension Headband, LIGHTSYNC RGB, Blue VO!CE mic Technology and PRO-G Audio Drivers - White",
    "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692257709689-logitech heaphone.jpg",
    "price": 384,
    "description": "Total freedom with up to 20 m wireless range and LIGHTSPEED wireless audio transmission. Keep playing for up to 29 hours of battery life. 1 Play in stereo on PlayStation(R) 4.\r\nPersonalize your headset lighting across the full spectrum, 16. 8M colors. Play in colors with front-facing, dual-zone LIGHTSYNC RGB lighting and choose from preset animations or create your own with G HUB software.\r\nColorful, reversible suspension headbands are designed for comfort during long play sessions.\r\nAdvanced mic filters that make your voice sound richer, cleaner, and more professional. Customize with G HUB and find your sound.\r\nHear every audio cue with breathtaking clarity and get immerse in your game. PRO-G drivers are designed to significantly reduce distortion and reproduce precise, consistent, rich sound quality.\r\nSoft dual-layer memory foam that conforms to your head and reduces stress points for long-lasting comfort.\r\nG733 weighs only 278 g for long-lasting comfort.",
    "brand": "logitech",
    "model": "G733 LIGHTSPEED",
    "color": "white",
    "category": "gaming",
    "popular": true,
    "discount": 3
  }
];

const categoriesMock = ['tv', 'audio'];

jest.mock('next/router', () => ({
  useRouter() {
    return ({
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn()
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null)
    });
  },
}));

jest.mock('../../../api/integration/Product/ProductApi', () => {
  return {
    __esModule: true,
    getProductsApi: (_filterCategory?: string, filterName?: string) => {
      return Promise.resolve(productsMock.filter((p) => {
        return !filterName || p.title?.toLowerCase().includes(filterName.toLowerCase())
      }));
    }
  };
});

jest.mock('../../../api/integration/Category/CategoryApi', () => {
  return {
    __esModule: true,
    getCategoriesApi: () => Promise.resolve(categoriesMock),
  };
});

describe('components/Home', () => {
  describe('HomePage component test', () => { 
    it('Have HomePage', async () => {
      await act(async () => {
        const { container: homeNode } = render(<HomePage />);
        expect(typeof homeNode).toEqual(typeof (<HomePage />));
      });
    });

    it('Have HomePage Table', async () => {
      await act(async () => {
        render(<HomePage />);
      });

      await waitFor(async () => {
        expect(await screen.findByRole('table')).toBeInTheDocument();
        expect(await screen.findByText(/Sony/)).toBeInTheDocument();
        expect(await screen.findByText(/Microsoft/)).toBeInTheDocument();
        expect(await screen.findByText(/Logitech/)).toBeInTheDocument();
      });
    });

    it('Have HomePage Pagination', async () => {
      await act(async () => {
        render(<HomePage />);
      });

      await waitFor(async () => {
        expect(await screen.findByText('1')).toBeInTheDocument();
        expect(await screen.findByText('>>')).toBeInTheDocument();
        expect(await screen.findByText('<<')).toBeInTheDocument();
      });
    });

    it('Have HomePage Filter', async () => {
      await act(async () => {
        render(<HomePage />);
      });

      fireEvent.change(await screen.findByTestId('input-search'), {
        target: { value: 'Sony' }
      });

      await waitFor(async () => {
        expect(screen.queryByText('1')).toBeInTheDocument();
        expect(screen.queryByText(/Sony/)).toBeInTheDocument();
        expect(screen.queryByText(/Microsoft/)).toBeNull();
        expect(screen.queryByText(/Logitech/)).toBeNull();
      }, { timeout: 3000 });
    });
  });
});