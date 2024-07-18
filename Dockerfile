FROM amazonlinux:2023

RUN curl -sL https://rpm.nodesource.com/setup_21.x | bash - && \
    yum install -y nodejs

RUN yum install -y \
  atk \
  cups-libs \
  dbus-glib \
  libXcomposite \
  libXcursor \
  libXdamage \
  libXext \
  libXi \
  libXtst \
  pango \
  alsa-lib \
  cairo \
  pango \
  libXrandr \
  libX11-xcb \
  gtk3 \
  xorg-x11-fonts-100dpi \
  xorg-x11-fonts-75dpi \
  xorg-x11-utils \
  xorg-x11-fonts-cyrillic \
  xorg-x11-fonts-Type1 \
  xorg-x11-fonts-misc

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY .env .env

EXPOSE 4000

CMD ["node", "dist/graphql.js"]