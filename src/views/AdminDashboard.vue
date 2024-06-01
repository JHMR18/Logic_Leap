<script setup>
import File from '../components/File.vue'

// Define the list of filenames
const filenames = ['Math.txt', 'Science.txt', 'English.txt', 'Hope.txt', 'Commerce.txt', 'God.txt', 'Grace.txt', 'Faith.txt', 'Truth.txt', 'Love.txt'];
</script>
<template>
    <!-- Main layout for the dashboard -->
    <v-layout class="Dashboard">
      <!-- App bar at the top -->
      <v-app-bar dense flat color="rgb(33, 33, 52)">
        <v-toolbar-title>
          <div>
              <!-- Title of the application -->
              <h1 style="color: navajowhite; margin: 20px;">LogicLeap<span  style="color: white; font-style: italic; font-size: 25px;">: Administrator</span>
              </h1>
          </div>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- Top bar buttons for search, notifications, account, and menu -->
        <div class="top">
          <v-btn icon class="search">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-btn icon class="notification" @click="showNotifications = true">
            <v-badge color="error" :content="notifications.length">
            <v-icon>mdi-bell</v-icon>
            </v-badge>
          </v-btn>
          <v-dialog v-model="showNotifications" max-width="425">
            <v-card>
                <v-list lines="two">
                <v-list-subheader>Notifications</v-list-subheader>

                <v-list-item v-for="(notification, index) in notifications" :key="index" :prepend-avatar="notification.avatar" :title="notification.title">
                    <template v-slot:subtitle>
                    <span class="font-weight-bold">{{ notification.user }}</span> &mdash; {{ notification.message }}
                    </template>
                </v-list-item>

                <v-divider v-if="index < notifications.length - 1" inset v-for="(notification, index) in notifications" :key="'divider-' + index"></v-divider>
                </v-list>
            </v-card>
            </v-dialog>
          
          <v-btn icon class="account">
            <v-icon>mdi-account</v-icon>
          </v-btn>
          <v-btn icon class="bar">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </div>
      </v-app-bar>
  
      <!-- Main content area -->
      <v-main class="d-flex align-center main-scrollable" style="min-height: 300px;">
        <!-- Home view section -->
        <div v-if="currentView === 'home'" class="container-section">
          <p style="color: navajowhite; font-size: 30px; margin: 20px; text-align: center;font-style: wide bold ;">Dashboard</p>
          <div class="slideContainer"></div>
          <div class="home-container">
            <p style="color: navajowhite; font-size: 30px; margin: 20px;">File Management</p>
  
            <!-- Storage Display Section -->
            <div class="storage-display" style="margin: 20px; color: navajowhite;">
              <p>Total Storage: {{ totalStorage }} MB</p>
              <p>Used Storage: {{ usedStorage }} MB</p>
              <v-progress-linear :value="storageUsedPercentage" color="blue" height="20">
                <template v-slot:default>
                  {{ storageUsedPercentage }}%
                </template>
              </v-progress-linear>
            </div>

            <!-- Container for File Types -->
            <div class="file-types-container" style="margin: 20px;">
              <v-row>
                <v-col cols="12" md="3">
                  <v-card class="file-type-card" outlined>
                    <v-card-title>
                      <v-icon left>mdi-file-image</v-icon>
                      Images
                    </v-card-title>
                    <v-card-text>
                      Manage your image files here.
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="3">
                  <v-card class="file-type-card" outlined>
                    <v-card-title>
                      <v-icon left>mdi-file-document</v-icon>
                      Text
                    </v-card-title>
                    <v-card-text>
                      Manage your text files here.
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="3">
                  <v-card class="file-type-card" outlined>
                    <v-card-title>
                      <v-icon left>mdi-file-video</v-icon>
                      Videos
                    </v-card-title>
                    <v-card-text>
                      Manage your video files here.
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="3">
                  <v-card class="file-type-card" outlined>
                    <v-card-title>
                      <v-icon left>mdi-file-music</v-icon>
                      Audio
                    </v-card-title>
                    <v-card-text>
                      Manage your audio files here.
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </div>
  
            <!-- File management section displaying files -->
            <div class="containerFile">
              <div class="file-container" style="width: 100%; margin-top: 10px; display: flex; flex-direction: row; flex-wrap: wrap;">
                  <!-- Loop through filenames and render File component for each -->
                  <File v-for="n in 11" :key="n" :filename="filenames[n-1]" />
              </div>
            </div>
            <!-- Button to create new folder -->
            <v-btn class="ma-2" @click="createNewFolder" color="primary">
                <v-icon left>mdi-folder-plus</v-icon>
                Create New Folder
              </v-btn>
          </div>
          <!-- Activity log section -->
          <div class="activity-log-container">
            <p style="color: navajowhite; font-size: 30px; margin: 20px;">Activity Log</p>
              <div class="logContainer">
                  <!-- Activity log table -->
                  <v-data-table
                      :headers="activityLogHeaders"
                      :items="activityLog"
                      class="elevation-1 activity-log-table"
                  >
                      <template v-slot:top>
                      <v-toolbar flat>
                      <v-toolbar-title>Log List</v-toolbar-title>
                      </v-toolbar>
                      </template>
                      
                      <!-- Display each log item -->
                      <template v-for="(header, index) in activityLogHeaders" v-slot:[`item.${header.value}`]="{ item }">
                          {{ header.text }}:{{ item[header.value] }} 
                      </template>
                      
                  </v-data-table>
              </div>
          </div>
          <!-- User management section -->
          <div class="users-container">
            <p style="color: navajowhite; font-size: 30px; margin: 20px;">User Management</p>
            <p style="color: navajowhite; font-size: 20px; margin: 20px;">Number of Users: {{ usersManagement.length }}</p>
            <v-spacer></v-spacer>
  
            <div class="userContainer">
              <!-- User management table -->
              <v-data-table
                  :headers="usersHeaders"
                  :items="usersManagement"
                  class="elevation-1 user-management-table"
                  item-key="userId"
                  @click:row="editUser"
              >
                <template v-slot:top>
                  <v-toolbar flat>
                  <v-toolbar-title>Users List</v-toolbar-title>
                  <v-btn absolute right top fab @click="addUser">
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                  </v-toolbar>
                </template>
              </v-data-table>
  
              <!-- Add/Edit User Dialog -->
              <v-dialog v-model="showUserDialog" max-width="500px">
                <v-card>
                  <v-card-title>
                    <span class="headline">{{ isEditing ? 'Edit User' : 'Add User' }}</span>
                  </v-card-title>
                  <v-card-text>
                    <v-form ref="userForm">
                      <v-text-field v-model="userForm.userId" label="User ID" :disabled="isEditing"></v-text-field>
                      <v-text-field v-model="userForm.name" label="Name"></v-text-field>
                      <v-text-field v-model="userForm.email" label="Email"></v-text-field>
                      <v-text-field v-model="userForm.encryptedPassword" label="Encrypted Password"></v-text-field>
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="blue darken-1" text @click="cancelUserDialog">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="saveUser">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </div>
        </div>
      </v-main>
    </v-layout>
  </template>
  
<style scoped>
.activity-log-table {
  background-color: rgb(50, 50, 70); /* Change to your desired color */
  color: navajowhite; /* Optional: Change text color if needed */
}

.activity-log-table .v-data-table-header th {
  background-color: rgb(40, 40, 60); /* Optional: Change header background color */
  color: navajowhite; /* Optional: Change header text color */
}   

.activity-log-table .v-data-table__divider {
  border-color: navajowhite; /* Optional: Change divider color */
}

.user-management-table {
  background-color: rgb(50, 50, 70); /* Change to your desired color */
  color: navajowhite; /* Optional: Change text color if needed */
}

.user-management-table .v-data-table-header th {
  background-color: rgb(40, 40, 60); /* Optional: Change header background color */
  color: navajowhite; /* Optional: Change header text color */
}

.user-management-table .v-data-table__divider {
  border-color: navajowhite; /* Optional: Change divider color */
}

.file-type-card {
  background-color: rgb(50, 50, 70);
  color: navajowhite;
}

.file-type-card .v-card-title {
  background-color: rgb(40, 40, 60);
  color: navajowhite;
}

.file-type-card .v-card-text {
  color: navajowhite;
}

.userContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100%;
  margin-top: 10px;
  background-color: rgb(9, 10, 25);
}
.logContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100%;
  margin-top: 10px;
  background-color: rgb(9, 10, 25);
}
.containerFile {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100%;
  margin-top: 10px;
  background-color: rgb(9,10,25);
}
.file-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;  
  color: navajowhite;
}
.main-scrollable {
  overflow-y: auto;
}

.sidedrawer {
  background-color: rgb(33, 33, 52);
}
.sidedrawer .logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  color: navajowhite;
}
.home,
.userManagement,
.activityLog {
  display: flex;
  justify-content: start;
  align-items: start;
  height: 60px;
  width: 100%;
  background-color: navajowhite;
  color: rgb(33, 33, 52);
}
.container-section {
  width: 100%;
  padding: 20px;
}
.top {
    color: navajowhite;
}
.home-container,
.activity-log-container,
.users-container {
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
}
</style>

<script>
export default {
  data() {
    return {
      drawerOpen: false,
      showNotifications: false,
      notifications: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Account Created',
          user: 'John Doe',
          message: 'created a new account.'
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'File Updated',
          user: 'Jane Smith',
          message: 'updated a file.'
        },
        ],
        // Add more notifications as needed],
      currentView: 'home', // Default view
      
      activityLogHeaders: [
        { text: 'Timestamp', value: 'timestamp' },
        { text: 'User ID', value: 'userId' },
        { text: 'Action', value: 'action' },
        { text: 'Collection', value: 'collection' },
        { text: 'Action By', value: 'actionBy' },
      ],
      activityLog: [
        {
          timestamp: '2023-06-01T12:00:00Z',
          userId: 'user123',
          action: 'Created',
          collection: 'Users',
          actionBy: 'Admin',
        },
        {
          timestamp: '2023-06-01T12:30:00Z',
          userId: 'user456',
          action: 'Updated',
          collection: 'Orders',
          actionBy: 'Admin',
        },
        // Add more log entries as needed
      ],
      usersHeaders: [
        { text: 'User ID', value: 'userId' },
        { text: 'Name', value: 'name' },
        { text: 'Email', value: 'email' },
        { text: 'Encrypted Password', value: 'encryptedPassword' },
      ],
      usersManagement: [
        {
          userId: 'user123',
          name: 'John Doe',
          email: 'john.doe@example.com',
          encryptedPassword: '**********', // Dummy encrypted password
        },
        {
          userId: 'user456',
          name: 'Jane Smith',
          email: 'jane.smith@example.com',
          encryptedPassword: '**********', // Dummy encrypted password
        },
        // Add more dummy users as needed
      ],
      showUserDialog: false,
      isEditing: false,
      userForm: {
        userId: '',
        name: '',
        email: '',
        encryptedPassword: ''
      },
      defaultUserForm: {
        userId: '',
        name: '',
        email: '',
        encryptedPassword: ''
      }
    };
  },
  computed: {
    storageUsedPercentage() {
      return ((this.usedStorage / this.totalStorage) * 100).toFixed(2);
    },
  },
  methods: {
    openDrawer() {
      this.drawerOpen = true;
    },
    closeDrawer() {
      this.drawerOpen = false;
    },
    setView(view) {
      this.currentView = view;
    },
    addUser() {
      this.resetUserForm();
      this.isEditing = false;
      this.showUserDialog = true;
    },
    createNewFolder() {
      const newFolderName = 'New Folder';
      let folderNumber = 1;
      let folderName = `${newFolderName} ${folderNumber}`;

      // Check for existing folder names and increment folder number if needed
      while (this.filenames.includes(folderName)) {
        folderNumber++;
        folderName = `${newFolderName} ${folderNumber}`;
      }

      this.filenames.push(folderName);
    },
    closeUserDialog() {
      this.showUserDialog = false;
      this.resetUserForm();
    },
    cancelUserDialog() {
      this.closeUserDialog();
    },
    saveUser() {
      if (this.isEditing) {
        // Update user
        const index = this.usersManagement.findIndex(user => user.userId === this.userForm.userId);
        if (index !== -1) {
          this.usersManagement.splice(index, 1, { ...this.userForm });
          this.notifications.push({
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'User Updated',
            user: this.userForm.name,
            message: 'updated their account.'
          });
        }
      } else {
        // Add new user
        this.usersManagement.push({ ...this.userForm });
        this.notifications.push({
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'New User',
          user: this.userForm.name,
          message: 'created a new account.'
        });
      }
      this.closeUserDialog();
    },
    editUser(user) {
      this.isEditing = true;
      this.userForm = { ...user };
      this.showUserDialog = true;
    },
    resetUserForm() {
      this.userForm = { ...this.defaultUserForm };
    }
  }
};
</script>
