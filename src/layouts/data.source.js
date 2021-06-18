import React from 'react';
export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: 'https://unibox-us.oss-us-east-1.aliyuncs.com/Website_Image/home/zicodexpress%20Logo.png',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item0',
        className: 'header0-item',
        children: {
          href: '/',
          children: [
            {
              children: 'Home',
              name: 'text',
              className: 'kpzvbuxjkhk-editor_css',
            },
          ],
        },
      
      },
      {
        name: 'item1',
        className: 'header0-item',
        children: {
          href: '/Markets',
          children: [{ children: 'Markets', name: 'text' }],
        },
        subItem: [
          {
            name: 'sub0',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
			  href: "/Apartment",
              children: [
			
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Apartment',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: 'XXX',
                },
              ],
            },
          },
          {
            name: 'sub1',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Ant Design',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '企业级 UI 设计体系',
                },
              ],
            },
          },
        ],
      },
      {
        name: 'item2',
        className: 'header0-item kpzveelso3a-editor_css',
        children: {
          href: '/Products',
          children: [
            {
              children: 'Products',
              name: 'text',
              className: 'kpzvedzoii-editor_css',
            },
          ],
        },
      },
      {
        name: 'item3',
        className: 'header0-item',
        children: {
          href: '#',
          children: [{ children: 'About us', name: 'text' }],
        },
      },
      {
        name: 'item4',
        className: 'header0-item',
        children: {
          href: '#',
          children: [{ children: 'Contact us', name: 'text' }],
        },
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};

export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2018 <a href="https://motion.ant.design">Ant Motion</a> All Rights
        Reserved
      </span>
    ),
  },
};
