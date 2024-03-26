export const generalUserMenu = {
  "userType": "general",
  "menuItems": [
    {
      "name": "Home",
      "link": "/"
    },
    {
      "name": "Browse Books",
      "link": "/books"
    },
    {
      "name": "Search Books",
      "link": "/search"
    },
    {
      "name": "My Account",
      "subItems": [
        {
          "name": "View Profile",
          "link": "/profile"
        },
        {
          "name": "Edit Profile",
          "link": "/profile/edit"
        },
        {
          "name": "Change Password",
          "link": "/profile/password"
        }
      ]
    },
    {
      "name": "My Library",
      "subItems": [
        {
          "name": "View Wishlist",
          "link": "/wishlist"
        },
        {
          "name": "View Shopping Cart",
          "link": "/cart"
        },
        {
          "name": "View Orders",
          "subItems": [
            {
              "name": "Order History",
              "link": "/orders/history"
            },
            {
              "name": "Track Order Status",
              "link": "/orders/track"
            }
          ]
        }
      ]
    },

  ]
};

export const donorMenu = {
  "userType": "donor",
  "menuItems": [
    {
      "name": "Home",
      "link": "/"
    },
    {
      "name": "Browse Books",
      "link": "/books"
    },
    {
      "name": "Search Books",
      "link": "/search"
    },
    {
      "name": "Donate Books",
      "subItems": [
        {
          "name": "Add Books to Donation",
          "link": "/donate/add"
        },
        {
          "name": "View Donated Books",
          "link": "/donate/view"
        }
      ]
    },
    {
      "name": "My Account",
      "subItems": [
        {
          "name": "View Profile",
          "link": "/profile"
        },
        {
          "name": "Edit Profile",
          "link": "/profile/edit"
        },
        {
          "name": "Change Password",
          "link": "/profile/password"
        }
      ]
    },
    {
      "name": "My Library",
      "subItems": [
        {
          "name": "View Wishlist",
          "link": "/wishlist"
        },
        {
          "name": "View Shopping Cart",
          "link": "/cart"
        },
        {
          "name": "View Orders",
          "subItems": [
            {
              "name": "Order History",
              "link": "/orders/history"
            },
            {
              "name": "Track Order Status",
              "link": "/orders/track"
            }
          ]
        }
      ]
    },

  ]
};

export const sellerMenu = {
  "userType": "seller",
  "menuItems": [
    {
      "name": "Home",
      "link": "/"
    },
    {
      "name": "Manage Books",
      "subItems": [
        {
          "name": "Add New Book",
          "link": "/books/add"
        },
        {
          "name": "Edit Book Details",
          "link": "/books/edit"
        },
        {
          "name": "Delete Book",
          "link": "/books/delete"
        }
      ]
    },
    {
      "name": "View Orders",
      "subItems": [
        {
          "name": "Order History",
          "link": "/orders/history"
        },
        {
          "name": "Manage Order Status",
          "link": "/orders/manage"
        }
      ]
    },
    {
      "name": "Sales Analytics",
      "subItems": [
        {
          "name": "View Sales Reports",
          "link": "/analytics/reports"
        },
        {
          "name": "Analyze Trends",
          "link": "/analytics/trends"
        }
      ]
    },
    {
      "name": "My Account",
      "subItems": [
        {
          "name": "View Profile",
          "link": "/profile"
        },
        {
          "name": "Edit Profile",
          "link": "/profile/edit"
        },
        {
          "name": "Change Password",
          "link": "/profile/password"
        }
      ]
    },

  ]
};