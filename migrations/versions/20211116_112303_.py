"""empty message

Revision ID: cc2a24217ed0
Revises: 8a8a11214d04
Create Date: 2021-11-16 11:23:03.192004

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'cc2a24217ed0'
down_revision = '8a8a11214d04'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('message_boards',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('sellerId', sa.Integer(), nullable=False),
    sa.Column('potentialBuyerId', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['potentialBuyerId'], ['users.id'], ),
    sa.ForeignKeyConstraint(['sellerId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('message_boards')
    # ### end Alembic commands ###