import { act } from 'react';
import { render } from '@test';
import { screen, waitFor } from '@testing-library/react';
import { ProductPage } from './ProductPage';

const productMock = {
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
};

jest.mock('next/router', () => ({
  useRouter() {
    return ({
      route: '/',
      pathname: '',
      query: { id: 1 },
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
    getProductApi: () => Promise.resolve(productMock)
  };
});

describe('components/Product', () => {
  describe('ProductPage component test', () => { 
    it('Have ProductPage', async () => {
      await act(async () => {
        const { container: homeNode } = render(<ProductPage />);
        expect(typeof homeNode).toEqual(typeof (<ProductPage />));
      });
    });

    it('Have ProductPage Table', async () => {
      await act(async () => {
        render(<ProductPage />);
      });

      await waitFor(async () => {
        expect(await screen.findByDisplayValue('1')).toBeInTheDocument();
        expect(await screen.findByDisplayValue('R$ 773,00')).toBeInTheDocument();
      });
    });
  });
});