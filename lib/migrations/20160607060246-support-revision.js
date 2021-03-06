'use strict'
module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn('Notes', 'savedAt', Sequelize.DATE)
    queryInterface.createTable('Revisions', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true
      },
      noteId: Sequelize.UUID,
      patch: Sequelize.TEXT,
      lastContent: Sequelize.TEXT,
      content: Sequelize.TEXT,
      length: Sequelize.INTEGER,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('Revisions')
    queryInterface.removeColumn('Notes', 'savedAt')
  }
}
