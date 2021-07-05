import React from 'react';

export const Banner00DataSource = {
  wrapper: { className: 'eCommerce_banner0' },
  textWrapper: { className: 'eCommerce_banner0-text-wrapper' },
  title: {
    className: 'eCommerce_banner0-title',
    children: '',
  },
  content: {
    className: 'eCommerce_banner0-content',
    children: '',
  },
   button: { className: 'banner0-button', children: 'Learn More' },
};
export const Banner40DataSource = {
  wrapper: { className: 'home-page-wrapper eCommerce_banner4' },
  page: { className: 'home-page eCommerce_banner4-page' },
  childWrapper: {
    className: 'eCommerce_banner4-title-wrapper',
    children: [
      { name: 'title', children: 'How do we resolve', className: 'eCommerce_banner4-title' },
      {
        name: 'content',
        className: 'eCommerce_banner4-content',
        children: 'Packages are dropped off in designated lockers Residents don’t have to wait at home anymore Residents are notified upon their packages’ arrival Residents pick up their packages 24/7',
      },
      {
        name: 'button',
        children: { href: '#', type: 'primary', children: '' },
      },
    ],
  },
  image: {
    className: 'eCommerce_banner4-image',
    children:
      'https://unibox-us.oss-us-east-1.aliyuncs.com/Website_Image/apartment/pic2_apartment.png',
  },
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper eCommerce_content0-wrapper' },
  page: { className: 'home-page eCommerce_content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: 'How do we resolve' }],
  },
  childWrapper: {
    className: 'eCommerce_content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'eCommerce_content0-block',
        md: 24,
        xs: 24,
        children: {
          className: 'eCommerce_content0-block-item',
          children: [
            {
              name: 'image',
              className: 'eCommerce_content0-block-icon',
              children:
                'https://unibox-us.oss-us-east-1.aliyuncs.com/Website_Image/school_slices/pic2_school%402x.png',
            },
            {
              name: 'title',
              className: 'eCommerce_content0-block-title',
              children: 'What a great experience',
            },
            { name: 'content', children: 'Nice and Easy...' },
          ],
        },
      },
      // {
      //   name: 'block1',
      //   className: 'eCommerce_content0-block',
      //   md: 8,
      //   xs: 24,
      //   children: {
      //     className: 'eCommerce_content0-block-item',
      //     children: [
      //       {
      //         name: 'image',
      //         className: 'eCommerce_content0-block-icon',
      //         children:
      //           'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
      //       },
      //       {
      //         name: 'title',
      //         className: 'eCommerce_content0-block-title',
      //         children: '一站式事中风险监控',
      //       },
      //       {
      //         name: 'content',
      //         children: '在所有需求配置环节事前风险控制和质量控制能力',
      //       },
      //     ],
      //   },
      // },
      // {
      //   name: 'block2',
      //   className: 'eCommerce_content0-block',
      //   md: 8,
      //   xs: 24,
      //   children: {
      //     className: 'eCommerce_content0-block-item',
      //     children: [
      //       {
      //         name: 'image',
      //         className: 'eCommerce_content0-block-icon',
      //         children:
      //           'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
      //       },
      //       {
      //         name: 'title',
      //         className: 'eCommerce_content0-block-title',
      //         children: '一站式数据运营',
      //       },
      //       {
      //         name: 'content',
      //         children: '沉淀产品接入效率和运营小二工作效率数据',
      //       },
      //     ],
      //   },
      // },
    ],
  },
};
export const Content10DataSource = {
  wrapper: { className: 'home-page-wrapper eCommerce_content1-wrapper' },
  OverPack: { className: 'home-page eCommerce_content1', playScale: 0.3 },
  imgWrapper: { className: 'eCommerce_content1-img', md: 10, xs: 24 },
  img: {
    children: 'https://unibox-us.oss-us-east-1.aliyuncs.com/Website_Image/ECOMMERCE_slices/pic_1%402x.png',
  },
  textWrapper: { className: 'eCommerce_content1-text', md: 14, xs: 24 },
  title: { className: 'eCommerce_content1-title', children: 'Current Problems' },
  content: {
    className: 'eCommerce_content1-content',
    children:
      'Customers feels they spend too much time in the store to look for something, looking for more convenient and time-saving way to get what they need?',
  },
};
export const Content30DataSource = {
  wrapper: { className: 'home-page-wrapper eCommerce_content3-wrapper' },
  page: { className: 'home-page eCommerce_content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '蚂蚁金融云提供专业的服务',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: '基于阿里云强大的基础资源',
      },
    ],
  },
  block: {
    className: 'eCommerce_content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'eCommerce_content3-block',
        md: 24,
        xs: 24,
        children: {
          icon: {
           
            className: 'eCommerce_content3-icon',
            md: 12,
            xs: 24,
            children:
              'https://unibox-us.oss-us-east-1.aliyuncs.com/Website_Image/ECOMMERCE_slices/pic_2%402x.png',
          },
          textWrapper: { className: 'eCommerce_content3-text' , md: 12, xs: 24 },
          title: { className: 'eCommerce_content3-title', children: 'Food Delivery' },
          content: {
            className: 'eCommerce_content3-content',
            children:
              'With our smart locker solution, you can put our smart locker outside or inside your store, customer can just stop by on their way to home or office, and pick up their orders online right away.',
          },
        },
      },
      {
        name: 'block1',
        className: 'eCommerce_content3-block',
        md: 24,
        xs: 24,
        children: {
          icon: {
            className: 'eCommerce_content3-icon',
            md: 12,
            xs: 24,
            children:
              'https://unibox-us.oss-us-east-1.aliyuncs.com/Website_Image/ECOMMERCE_slices/pic_3%402x.png',
          },
          textWrapper: { className: 'eCommerce_content3-text' , md: 12, xs: 24 },
          title: { className: 'eCommerce_content3-title', children: 'No Interruption' },
          content: {
            className: 'eCommerce_content3-content',
            children:
              'And we also can work with grocery stores to deliver the product to customers’ nearest lockers in their zipcode so that customers do need to come to the store, make them even more convenient and more importantly with very low cost for both grocery stores and customers.',
          },
        },
      },
      {
        name: 'block2',
        className: 'eCommerce_content3-block',
        md: 12,
        xs: 24,
        children: {
          icon: {
            md: 12,
            xs: 24,
            className: 'eCommerce_content3-icon',
            children:
              'https://unibox-us.oss-us-east-1.aliyuncs.com/Website_Image/ECOMMERCE_slices/pic_4%402x.png',
          },
          textWrapper: { className: 'eCommerce_content3-text', md: 12, xs: 24 },
          title: { className: 'eCommerce_content3-title', children: '云监控' },
          content: {
            className: 'eCommerce_content3-content',
            children:
              '分布式云环境集中监控，统一资源及应用状态视图，智能分析及故障定位。',
          },
        },
      },
  
    ],
  },
};
export const Feature70DataSource = {
  wrapper: { className: 'home-page-wrapper eCommerce_feature7-wrapper' },
  page: { className: 'home-page eCommerce_feature7' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'eCommerce_feature7-title-wrapper',
    children: [
      {
        name: 'title',
        className: 'eCommerce_feature7-title-h1',
        children: '图像在线服务',
      },
      {
        name: 'content',
        className: 'eCommerce_feature7-title-content',
        children: '你可以直接快速接入图像能力',
      },
    ],
  },
  blockWrapper: {
    className: 'eCommerce_feature7-block-wrapper',
    gutter: 24,
    children: [
      {
        md: 6,
        xs: 24,
        name: 'block0',
        className: 'eCommerce_feature7-block',
        children: {
          className: 'eCommerce_feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'eCommerce_feature7-block-image',
              children:
                'https://bucket.mlcdn.com/a/1736/1736632/images/acfe55401bfc35949aaa9b49ac9b3fb6ec4a1df7.png',
            },
            {
              name: 'title',
              className: 'eCommerce_feature7-block-title',
              children: '',
            },
            {
              name: 'content',
              className: 'eCommerce_feature7-block-content',
              children: 'No more multiple attempts to deliver bulky packages to each unit',
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: 'block1',
        className: 'eCommerce_feature7-block',
        children: {
          className: 'eCommerce_feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'eCommerce_feature7-block-image',
              children:
                'https://bucket.mlcdn.com/a/1736/1736632/images/d0af21351103c9d30cb1cae9e2df29d7d1991761.png',
            },
            {
              name: 'title',
              className: 'eCommerce_feature7-block-title',
              children: '',
            },
            {
              name: 'content',
              className: 'eCommerce_feature7-block-content',
              children: 'No more leaving valuable packages at door front that may cause liability issues',
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: 'block2',
        className: 'eCommerce_feature7-block',
        children: {
          className: 'eCommerce_feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'eCommerce_feature7-block-image',
              children:
                'https://bucket.mlcdn.com/a/1736/1736632/images/744ddaeba3f8316af168b5c10e3069fb6d894165.png',
            },
            {
              name: 'title',
              className: 'eCommerce_feature7-block-title',
              children: '',
            },
            {
              name: 'content',
              className: 'eCommerce_feature7-block-content',
              children: 'No more requesting signatures by property management',
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: 'block3',
        className: 'eCommerce_feature7-block',
        children: {
          className: 'eCommerce_feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'eCommerce_feature7-block-image',
              children:
                'https://bucket.mlcdn.com/a/1736/1736632/images/25c4525e929c8e49c23bc982f4d3d7bcea94999c.png',
            },
            {
              name: 'title',
              className: 'eCommerce_feature7-block-title',
              children: '',
            },
            {
              name: 'content',
              className: 'eCommerce_feature7-block-content',
              children: 'No more climbing stairs and time wasted',
            },
          ],
        },
      },
      
    ],
  },
};

