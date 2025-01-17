import { IPosts, STATUS } from "../interfaces";

const postsBase: Array<IPosts> = [
    {
      idPost: "eef42b15-1372-44b6-b57e-8816362fe71b",
      idAuthor: "f7abbe1c-4542-4898-b393-de96008de1e7",
      nameAuthor: "Velho da lancha",
      photoAuthor: require("../../assets/images/mocks/close-up-senior-man-with-grey-hair.jpg"),
      media: {
        type: "img",
        url: require("../../assets/images/mocks/ponto-de-onibus.png")
      },
      description: `É inadmissível que o transporte público em Feira de Santana continue nesse estado de abandono. Os ônibus atrasam, estão lotados, mal conservados e deixam milhares de cidadãos à mercê de um sistema que não funciona. Quem depende disso para trabalhar, estudar ou se locomover vive diariamente uma batalha injusta e humilhante.

Chega de promessas vazias! Precisamos de ônibus pontuais, em bom estado e com horários que atendam a população de verdade. Como cidadãos, exigimos respeito e ações concretas. Feira de Santana não pode mais aceitar esse descaso!`,
      like: [
        {
          idLike: "ef31324e-066f-43d2-b734-06f0491c008f",
          idUser: "1280103e-d2dc-44c1-9dce-0ad89353f201",
          like: false,
          nameAuthor: "User_f7abbe1c-4542-4898-b393-de96008de1e7",
          photoAuthor: "https://picsum.photos/seed/f7abbe1c-4542-4898-b393-de96008de1e7/50/50"
        }
      ],
      comments: [{
        idComment: "9f6dcdd6-9b82-4d5f-ab7b-9c01af2abf22",
        idPost: "eef42b15-1372-44b6-b57e-8816362fe71b",
        idAuthor: "f1abb6a8-e7c9-4281-a967-22a1115f600d",
        nameAuthor: "Author_9f6d",
        photoAuthor: "https://picsum.photos/seed/9f6d/50/50",
        parentComments: undefined,
        commentsChildren: [],
        content: "This is a comment for post eef42b15-1372-44b6-b57e-8816362fe71b.",
        like: {
          idLike: "be7dfc46-3c8d-4417-8840-b1a89f11fd35",
          idUser: "f03118de-8aed-495c-98c0-1e9a2fd2ef79",
          like: true
        }
      }],
      location: {
        country: "Japan",
        state: "SP",
        city_district: "Toronto",
        suburb: "Suburb C",
        road: "Yonge Street",
        type: "Commercial",
        geoLocation: {
          longitude: -141.659039,
          latitude: 81.35022
        }
      },
      responsible: "Responsible_f7ab",
      statusDemand: {
        idStatusDemand: "8dabdc9f-ee24-45f7-9284-16e7e5b098c9",
        name: STATUS.OPEN
      },
      sector: {
        idSector: "6ca48a73-b0fd-4dd4-b6fa-640109db8883",
        nameSector: "Transporte"
      }
    },
    {
      idPost: "038db1dc-5a3e-40a4-8649-1e2994c6eda0",
      idAuthor: "2d0b1dfa-b831-44d0-9d0d-875605e72f7e",
      nameAuthor: "Author_2d0b",
      photoAuthor: "https://picsum.photos/seed/2d0b/50/50",
      media: {
        type: "img",
        url: "https://images.unsplash.com/photo-1734640113825-24dd7c056052?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      description: "This is a post with ID 038db1dc-5a3e-40a4-8649-1e2994c6eda0.",
      like: [
        {
          idLike: "f20eb455-36e6-42b0-8c11-7f8e029f5871",
          idUser: "4807f7f6-4ead-47c4-9186-5276b949672b",
          like: true,
          nameAuthor: "User_2d0b1dfa-b831-44d0-9d0d-875605e72f7e",
          photoAuthor: "https://picsum.photos/seed/2d0b1dfa-b831-44d0-9d0d-875605e72f7e/50/50"
        },
        {
          idLike: "55ea35c2-282d-4a16-8bcd-f0dd5ad9522a",
          idUser: "e488fede-afd9-4934-9f6f-5b8cda60160c",
          like: true,
          nameAuthor: "User_2d0b1dfa-b831-44d0-9d0d-875605e72f7e",
          photoAuthor: "https://picsum.photos/seed/2d0b1dfa-b831-44d0-9d0d-875605e72f7e/50/50"
        }
      ],
      comments: [{
        idComment: "5e24dab4-ead3-497d-860f-bbed800e8300",
        idPost: "038db1dc-5a3e-40a4-8649-1e2994c6eda0",
        idAuthor: "ef4f19bd-a5c4-4387-ba58-a216fe2f82c7",
        nameAuthor: "Author_5e24",
        photoAuthor: "https://picsum.photos/seed/5e24/50/50",
        parentComments: undefined,
        commentsChildren: [],
        content: "This is a comment for post 038db1dc-5a3e-40a4-8649-1e2994c6eda0.",
        like: {
          idLike: "da9fb2c3-0564-42e8-bd00-165cb709339c",
          idUser: "18b8c91e-3bf2-4c73-b3e1-5430a7781a46",
          like: false
        }
      }],
      location: {
        country: "USA",
        state: "ON",
        city_district: "Toronto",
        suburb: "Suburb B",
        road: "Avenida Paulista",
        type: "Industrial",
        geoLocation: {
          longitude: -113.025325,
          latitude: -38.749171
        }
      },
      responsible: undefined,
      statusDemand: {
        idStatusDemand: "9507e898-6480-473a-bd62-c262881e5ca8",
        name: STATUS.IN_PROGRESS
      },
      sector: {
        idSector: "6da8885b-53fb-4516-aec6-91feb2c00ca7",
        nameSector: "Saúde"
    }
  }
];

export const postsMock: Array<IPosts> = [
  ...postsBase, 
  ...Array.from({ length: 8 }, (_, index) => ({
    idPost: `post-${index + 1}`,
    idAuthor: `author-${index + 1}`,
    nameAuthor: `Author_${index + 1}`,
    photoAuthor: `https://picsum.photos/seed/author-${index + 1}/50/50`,
    media: index % 2 === 0
      ? {
          type: "image",
          url: `https://picsum.photos/seed/post-${index + 1}/200/200`,
        }
      : undefined,
    description: `This is a post with ID post-${index + 1}.`,
    like: [
      {
        idLike: `like-${index + 1}-1`,
        idUser: `user-${index + 1}-1`,
        like: index % 3 === 0,
        nameAuthor: `User_${index + 1}`,
        photoAuthor: `https://picsum.photos/seed/user-${index + 1}/50/50`,
      },
    ],
    comments: [{
      idComment: `comment-${index + 1}`,
      idPost: `post-${index + 1}`,
      idAuthor: `comment-author-${index + 1}`,
      nameAuthor: `Commenter_${index + 1}`,
      photoAuthor: `https://picsum.photos/seed/comment-author-${index + 1}/50/50`,
      parentComments: undefined,
      commentsChildren: [],
      content: `This is a comment for post-${index + 1}.`,
      like: {
        idLike: `like-comment-${index + 1}`,
        idUser: `user-comment-${index + 1}`,
        like: index % 2 === 0,
      },
    }],
    location: {
      country: `Country_${index + 1}`,
      state: `State_${index + 1}`,
      city_district: `District_${index + 1}`,
      suburb: `Suburb_${index + 1}`,
      road: `Road_${index + 1}`,
      type: index % 2 === 0 ? "Residential" : "Commercial",
      geoLocation: {
        longitude: parseFloat((Math.random() * 180 - 90).toFixed(6)),
        latitude: parseFloat((Math.random() * 360 - 180).toFixed(6)),
      },
    },
    responsible: index % 2 === 0 ? `Responsible_${index + 1}` : undefined,
    statusDemand: {
      idStatusDemand: `status-${index + 1}`,
      name: index % 4 === 0
        ? STATUS.OPEN
        : index % 4 === 1
        ? STATUS.IN_PROGRESS
        : index % 4 === 2
        ? STATUS.FINISHED
        : STATUS.CANCELED,
    },
    sector: {
      idSector: `sector-${index + 1}`,
      nameSector: "Saúde"
    }
  })),
];

  