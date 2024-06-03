import { render, screen } from '@testing-library/react';
import Bic from '../../components/Clicker/Bic.tsx';
import UserEvent from "@testing-library/user-event"
import { Provider } from 'react-redux';
import { store } from '../../redux/store.ts';

test('Verifica se após clicar 100 vezer na caneta você recebe um bonus de no minimo 100 de dinheiro.', async () => {
  render(<Provider store={store}><Bic /></Provider>);
  const bic = screen.getByTestId("bicButton")
  const money = screen.getByTestId("moneyText")

  for (let i = 0; i <= 99; i++) {
    await UserEvent.click(bic)
  }
  expect(Number(money.innerHTML)).toBeGreaterThanOrEqual(200)
});
