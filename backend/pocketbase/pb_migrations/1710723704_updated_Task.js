/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pwtk08j9lz0sfxc")

  collection.name = "task"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pwtk08j9lz0sfxc")

  collection.name = "Task"

  return dao.saveCollection(collection)
})
