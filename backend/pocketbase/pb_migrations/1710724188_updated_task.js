/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pwtk08j9lz0sfxc")

  // remove
  collection.schema.removeField("bl89hzjc")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pwtk08j9lz0sfxc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bl89hzjc",
    "name": "task_id",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
})
