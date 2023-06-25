import time
import pymysql
#获取数据库链接  获取游标
def get_conn():
    conn = pymysql.connect(host="127.0.0.1", port=3306, user="root", password="123456", database="shixun", charset="utf8")
    if conn == None:
        print("数据库链接失败")
    else:
        print("数据库链接成功")
    cursor = conn.cursor()
    return conn,cursor


#  释放资源
def close(conn,cursor):
    cursor.close();
    conn.close();


# 查询数据库数据
def query(sql,*args):
    conn,cursor = get_conn()
    cursor.execute(sql,args)
    res = cursor.fetchall()
    return res


def get_left1():
    sql = 'SELECT age FROM a'
    res = query(sql)
    print(res)
    return res

def get_left2():
    sql = 'SELECT education FROM b'
    res = query(sql)
    print(res)
    return res


def get_center2():
    sql = 'SELECT sport FROM c'
    res = query(sql)
    print(res)
    return res





