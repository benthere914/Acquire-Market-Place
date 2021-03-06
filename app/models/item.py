from threading import Condition
from .db import db
from .item_photos import ItemPhoto

class Item(db.Model):
    __tablename__ = 'items'
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    categoryId = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=False, unique=False)
    sellerId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False, unique=False)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    dateListed = db.Column(db.DateTime(), nullable=False)
    price = db.Column(db.Float, nullable=False)
    discount = db.Column(db.Integer, nullable=False, default=0)
    condition=db.Column(db.String(15), nullable=False, default='Used')
    count = db.Column(db.Integer, nullable=False, default=1)

    category = db.relationship('Category', back_populates='items')
    seller = db.relationship('User', back_populates='items')
    item_photos = db.relationship('ItemPhoto', back_populates='item')

    def to_dict(self):
        return {
            'id': self.id,
            'categoryId': self.categoryId,
            'sellerId': self.sellerId,
            'name': self.name,
            'description': self.description,
            'dateListed': self.dateListed,
            'price': self.price,
            'discount': self.discount,
            'condition': self.condition,
            'count': self.count
            # 'photo': ItemPhoto.query.filter(ItemPhoto.itemId == self.id)
        }
