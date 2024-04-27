// feature token
import { TOKENS } from "../constants/config";
export const getHeader = {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-ACCESS": TOKENS.GATEWAY_TOKEN,
  },
};

export const postHeader = {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-ACCESS": TOKENS.GATEWAY_TOKEN,
  },
};
export const patchHeader = {
  method: "PATCH",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-ACCESS": TOKENS.GATEWAY_TOKEN,
  },
};
export const fileHeader = {
  method: "POST",
  headers: {
    Accept: "application/json",
    "X-ACCESS": TOKENS.GATEWAY_TOKEN,
  },
};

export const putHeader = {
  method: "PUT",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-ACCESS": TOKENS.GATEWAY_TOKEN,
  },
};

export const deleteHeader = {
  method: "DELETE",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-ACCESS": TOKENS.GATEWAY_TOKEN,
  },
};
