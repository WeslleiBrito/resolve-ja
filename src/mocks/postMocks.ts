export const posts = [
    {
      idPost: "eef42b15-1372-44b6-b57e-8816362fe71b",
      idAuthor: "f7abbe1c-4542-4898-b393-de96008de1e7",
      nameAuthor: "Author_f7ab",
      photoAuthor: "https://picsum.photos/seed/f7ab/50/50",
      media: null,
      content: "This is a post with ID eef42b15-1372-44b6-b57e-8816362fe71b.",
      like: [
        {
          idLike: "ef31324e-066f-43d2-b734-06f0491c008f",
          idUser: "1280103e-d2dc-44c1-9dce-0ad89353f201",
          like: false,
          nameAuthor: "User_f7abbe1c-4542-4898-b393-de96008de1e7",
          photoAuthor: "https://picsum.photos/seed/f7abbe1c-4542-4898-b393-de96008de1e7/50/50"
        }
      ],
      comments: {
        idComment: "9f6dcdd6-9b82-4d5f-ab7b-9c01af2abf22",
        idPost: "eef42b15-1372-44b6-b57e-8816362fe71b",
        idAuthor: "f1abb6a8-e7c9-4281-a967-22a1115f600d",
        nameAuthor: "Author_9f6d",
        photoAuthor: "https://picsum.photos/seed/9f6d/50/50",
        parentComments: null,
        commentsChildren: [],
        content: "This is a comment for post eef42b15-1372-44b6-b57e-8816362fe71b.",
        like: {
          idLike: "be7dfc46-3c8d-4417-8840-b1a89f11fd35",
          idUser: "f03118de-8aed-495c-98c0-1e9a2fd2ef79",
          like: true
        }
      },
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
        name: "open"
      }
    },
    {
      idPost: "038db1dc-5a3e-40a4-8649-1e2994c6eda0",
      idAuthor: "2d0b1dfa-b831-44d0-9d0d-875605e72f7e",
      nameAuthor: "Author_2d0b",
      photoAuthor: "https://picsum.photos/seed/2d0b/50/50",
      media: {
        type: "video",
        url: "https://picsum.photos/seed/038d/200/200"
      },
      content: "This is a post with ID 038db1dc-5a3e-40a4-8649-1e2994c6eda0.",
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
      comments: {
        idComment: "5e24dab4-ead3-497d-860f-bbed800e8300",
        idPost: "038db1dc-5a3e-40a4-8649-1e2994c6eda0",
        idAuthor: "ef4f19bd-a5c4-4387-ba58-a216fe2f82c7",
        nameAuthor: "Author_5e24",
        photoAuthor: "https://picsum.photos/seed/5e24/50/50",
        parentComments: null,
        commentsChildren: [],
        content: "This is a comment for post 038db1dc-5a3e-40a4-8649-1e2994c6eda0.",
        like: {
          idLike: "da9fb2c3-0564-42e8-bd00-165cb709339c",
          idUser: "18b8c91e-3bf2-4c73-b3e1-5430a7781a46",
          like: false
        }
      },
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
      responsible: null,
      statusDemand: {
        idStatusDemand: "9507e898-6480-473a-bd62-c262881e5ca8",
        name: "in_progress"
      }
    }
    // Outros objetos omitidos por brevidade
  ];
  