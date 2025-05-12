// Configuração da API
const API_BASE_URL = 'http://localhost:3000/api';

// Endpoints da API
const API_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/auth/login`,
  REGISTER: `${API_BASE_URL}/auth/register`,
  PRODUCTS: `${API_BASE_URL}/products`,
  PRODUCERS: `${API_BASE_URL}/producers`,
  CART: `${API_BASE_URL}/cart`,
  ORDERS: `${API_BASE_URL}/orders`,
  PROFILE: `${API_BASE_URL}/profile`
};

// Chaves para localStorage
const STORAGE_KEYS = {
  TOKEN: 'shopdovale_token',
  USER: 'shopdovale_user',
  CART: 'shopdovale_cart'
};

// Tipos de usuário
const USER_TYPES = {
  BUYER: 'comprador',
  PRODUCER: 'produtor'
};

// Opções de entrega
const DELIVERY_OPTIONS = {
  DELIVERY: 'entrega',
  PICKUP: 'retirada'
};

// Formatação de moeda
function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
}