export const addClass = (cl: string, el: HTMLElement | null): void => {
  if (el) el.classList.add(cl);
};

export const removeClass = (cl: string, el: HTMLElement | null): void => {
  if (el) el.classList.remove(cl);
};

export const setMessage = (msg: string, el?: HTMLElement | null): void => {
  if (el) el.innerText = msg;
};

export const inputHasValue = (input?: HTMLInputElement | null): boolean => {
  if (input && input.value) return true;

  return false;
};

export const openModal = (id: string): void => {
  const modal = document.getElementById(id);

  if (!modal) return;

  addClass('active', modal);
};

export const closeModal = (id: string, event?: Event): void => {
  const target = event ? event.target : null;
  const modal = document.getElementById(id);

  if (!modal) return;

  if (target === modal) removeClass('active', modal);
  if (target === null) removeClass('active', modal);
};
